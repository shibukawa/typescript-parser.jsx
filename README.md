typescript-parser.jsx
===========================================

Synopsis
---------------

TypeScript parser for JSX

Code Example
---------------

```js
import "typescript-parser.jsx";

class _Main {
    static const code = '''
        class Greeter {
            greeting: string;
            constructor(message: string) {
                this.greeting = message;
            }
            greet() {
                return "Hello, " + this.greeting;
            }
        }
    ''';

    static function main(argv : string[]) : void
    {
        var syntaxTree = TypeScript.Parser.parse('greeting.ts', _Main.code);
        console.log(syntaxTree.toJSON());
    }
}
```

Installation
---------------

```sh
$ npm install typescript-parser.jsx --save-dev
```

API Reference
------------------

There are many internal hidden API to access AST tree. This section includes some important class document.
There are no complete document. See [source code](https://github.com/shibukawa/typescript-parser.jsx/blob/master/src/typescript-parser-tmpl-begin.jsx).

### `TypeScript.Parser` class

Parse script and return AST object.

*   `parse(filename : string, code : string, isDeclearFile : boolean) : TypeScript.SyntaxTree`

```js
var syntaxTree = TypeScript.Parser.parse('syntaxNode.ts', node.fs.readFileSync('syntaxNode.ts', 'utf8'));
console.log(JSON.stringify(syntaxTree.toJSON(), null, 4));
```

### `TypeScript.SyntaxKind` object

This class has enum values. These values are used for `ISyntaxElement.kind()`.
Available name list is [here](http://typescript.codeplex.com/SourceControl/latest#src/compiler/syntax/syntaxKind.ts).

```js
var kind = TypeScript.SyntaxKind.List; // 1
var name = TypeScript.SyntaxKind[1];   // 'List'
```

### `TypeScript.SyntaxTree` class

Root class of AST tree. `SourceUnitSyntax` is derived from `ISyntaxElement`. You can access AST tree from here.

*   `toJSON() : variant`
*   `sourceUnit() : `TypeScript.SourceUnitSyntax`

```js
var syntaxTree = TypeScript.Parser.parse('syntaxNode.ts', node.fs.readFileSync('syntaxNode.ts', 'utf8'));
console.log(JSON.stringify(syntaxTree.sourceUnit().childAt(0), null, 4));
```

### `TypeScript.ISyntaxElement` class

All elements are derived from this class. This class provides methods to traverse AST tree.

*   `kind() : int`
*   `childCount() : int`
*   `childAt(index: int) : TypeScript.ISyntaxElement`
*   `toJSON() : variant`

You should cast from this class to any your needed class.

```js
if (node.kind() == TypeScript.SyntaxKind.ForStatement) {
    var forNode = node as __noconvert__ TypeScript.ForStatementSyntax;
    var statement = forNode.statement;
}
```

Development
-------------

## Repository

* Repository: git://github.com/shibukawa/typescript-parser.jsx.git
* Issues: https://github.com/shibukawa/typescript-parser.jsx/issues

## Run Test

```sh
$ grunt test
```

## Build Sample

```sh
# Build sample
$ grunt build
# Create typescript-parser.jsx from TypeScript's module
$ grunt pre-build
```

## Generate API reference

```sh
$ grunt doc
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

Apache-V2

Complete license is written in `LICENSE.md`.
