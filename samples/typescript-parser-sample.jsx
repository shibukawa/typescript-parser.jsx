import "console.jsx";
import "typescript-parser.jsx";

class _Main {
    static const sample_code1 = '''
    ///<reference path='references.ts' />

    module TypeScript {
        export class SyntaxNode implements ISyntaxNodeOrToken {
            private _data: number;

            constructor(parsedInStrictMode: boolean) {
                this._data = parsedInStrictMode ? SyntaxConstants.NodeParsedInStrictModeMask : 0;
            }

            public isNode(): boolean { return true; }
            public isToken(): boolean { return false; }
            public isList(): boolean { return false; }
            public isSeparatedList(): boolean { return false; }

            public kind(): SyntaxKind {
                throw Errors.abstract();
            }

            public childCount(): number {
                throw Errors.abstract();
            }

            public childAt(slot: number): ISyntaxElement {
                throw Errors.abstract();
            }

            // Returns the first non-missing token inside this node (or null if there are no such token).
            public firstToken(): ISyntaxToken {
                for (var i = 0, n = this.childCount(); i < n; i++) {
                    var element = this.childAt(i);
                    if (element !== null) {
                        if (element.fullWidth() > 0 || element.kind() === SyntaxKind.EndOfFileToken) {
                            return element.firstToken();
                        }
                    }
                }
                return null;
            }

            public trailingTriviaWidth() {
                var lastToken = this.lastToken();
                return lastToken === null ? 0 : lastToken.trailingTriviaWidth();
            }
        }
    }
    ''';

    static function main(argv : string[]) : void
    {
        var syntaxTree = TypeScript.Parser.parse('syntaxNode.ts', _Main.sample_code1);
        console.log(syntaxTree.toJSON());
    }
}
