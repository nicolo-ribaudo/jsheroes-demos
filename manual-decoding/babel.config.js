export default {
  presets: ["@babel/preset-typescript"],
  plugins: [simpleClassPlugin],
};

/** @param {import("@babel/core")} babel  */
function simpleClassPlugin(babel) {
  const { types: t, template } = babel;
  return {
    visitor: {
      ClassDeclaration(path) {
        const { node } = path;
        const { id, body } = node;
        const classMethods = body.body;

        const constructor = classMethods.find(
          (method) => method.kind === "constructor"
        );
        const otherMethods = classMethods.filter(
          (method) => method.type === "ClassMethod" && method.kind !== "constructor"
        );

        const replacementConstructor = t.functionDeclaration(
          id,
          constructor ? constructor.params : [],
          constructor ? constructor.body : t.blockStatement([])
        );
        t.inherits(replacementConstructor, node);
        const replacementMethods = otherMethods.map((method) => {
          const replacement = t.functionExpression(
            t.identifier(method.key.name),
            method.params,
            method.body
          );
          t.inherits(replacement, method);
          return template.statement.ast`
            ${id.name}.prototype.${method.key.name} = ${replacement}
          `;
        });

        path.replaceWithMultiple([
          replacementConstructor,
          ...replacementMethods,
        ]);

        path.scope.crawl();
        path.scope.rename(id.name, `class_${id.name}`);
      },
    },
  };
}
