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

* `TypeScript.Parser.parse(filename : string, code : string, isDeclearFile : boolean) : TypeScript.SyntaxTree`

Parse script and return AST object (See [SyntaxTree](http://typescript.codeplex.com/SourceControl/latest#src/compiler/syntax/syntaxTree.ts) source code). Almost all members of syntax objects are available.

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
