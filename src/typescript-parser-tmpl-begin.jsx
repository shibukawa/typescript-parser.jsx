native class TypeScript {
    class SyntaxKind {
        static const None : int;
        static const List : int;
        static const SeparatedList : int;
        static const TriviaList : int;

        static const WhitespaceTrivia : int;
        static const NewLineTrivia : int;
        static const MultiLineCommentTrivia : int;
        static const SingleLineCommentTrivia : int;
        static const SkippedTokenTrivia : int;

        static const ErrorToken : int;
        static const EndOfFileToken : int;

        static const IdentifierName : int;

        static const RegularExpressionLiteral : int;
        static const NumericLiteral : int;
        static const StringLiteral : int;

        static const BreakKeyword : int;
        static const CaseKeyword : int;
        static const CatchKeyword : int;
        static const ContinueKeyword : int;
        static const DebuggerKeyword : int;
        static const DefaultKeyword : int;
        static const DeleteKeyword : int;
        static const DoKeyword : int;
        static const ElseKeyword : int;
        static const FalseKeyword : int;
        static const FinallyKeyword : int;
        static const ForKeyword : int;
        static const FunctionKeyword : int;
        static const IfKeyword : int;
        static const InKeyword : int;
        static const InstanceOfKeyword : int;
        static const NewKeyword : int;
        static const NullKeyword : int;
        static const ReturnKeyword : int;
        static const SwitchKeyword : int;
        static const ThisKeyword : int;
        static const ThrowKeyword : int;
        static const TrueKeyword : int;
        static const TryKeyword : int;
        static const TypeOfKeyword : int;
        static const VarKeyword : int;
        static const VoidKeyword : int;
        static const WhileKeyword : int;
        static const WithKeyword : int;

        static const ClassKeyword : int;
        static const ConstKeyword : int;
        static const EnumKeyword : int;
        static const ExportKeyword : int;
        static const ExtendsKeyword : int;
        static const ImportKeyword : int;
        static const SuperKeyword : int;

        static const ImplementsKeyword : int;
        static const InterfaceKeyword : int;
        static const LetKeyword : int;
        static const PackageKeyword : int;
        static const PrivateKeyword : int;
        static const ProtectedKeyword : int;
        static const PublicKeyword : int;
        static const StaticKeyword : int;
        static const YieldKeyword : int;

        static const AnyKeyword : int;
        static const BooleanKeyword : int;
        static const ConstructorKeyword : int;
        static const DeclareKeyword : int;
        static const GetKeyword : int;
        static const ModuleKeyword : int;
        static const RequireKeyword : int;
        static const NumberKeyword : int;
        static const SetKeyword : int;
        static const StringKeyword : int;

        static const OpenBraceToken : int;
        static const CloseBraceToken : int;
        static const OpenParenToken : int;
        static const CloseParenToken : int;
        static const OpenBracketToken : int;
        static const CloseBracketToken : int;
        static const DotToken : int;
        static const DotDotDotToken : int;
        static const SemicolonToken : int;
        static const CommaToken : int;
        static const LessThanToken : int;
        static const GreaterThanToken : int;
        static const LessThanEqualsToken : int;
        static const GreaterThanEqualsToken : int;
        static const EqualsEqualsToken : int;
        static const EqualsGreaterThanToken : int;
        static const ExclamationEqualsToken : int;
        static const EqualsEqualsEqualsToken : int;
        static const ExclamationEqualsEqualsToken : int;
        static const PlusToken : int;
        static const MinusToken : int;
        static const AsteriskToken : int;
        static const PercentToken : int;
        static const PlusPlusToken : int;
        static const MinusMinusToken : int;
        static const LessThanLessThanToken : int;
        static const GreaterThanGreaterThanToken : int;
        static const GreaterThanGreaterThanGreaterThanToken : int;
        static const AmpersandToken : int;
        static const BarToken : int;
        static const CaretToken : int;
        static const ExclamationToken : int;
        static const TildeToken : int;
        static const AmpersandAmpersandToken : int;
        static const BarBarToken : int;
        static const QuestionToken : int;
        static const ColonToken : int;
        static const EqualsToken : int;
        static const PlusEqualsToken : int;
        static const MinusEqualsToken : int;
        static const AsteriskEqualsToken : int;
        static const PercentEqualsToken : int;
        static const LessThanLessThanEqualsToken : int;
        static const GreaterThanGreaterThanEqualsToken : int;
        static const GreaterThanGreaterThanGreaterThanEqualsToken : int;
        static const AmpersandEqualsToken : int;
        static const BarEqualsToken : int;
        static const CaretEqualsToken : int;
        static const SlashToken : int;
        static const SlashEqualsToken : int;

        static const SourceUnit : int;

        static const QualifiedName : int;

        static const ObjectType : int;
        static const FunctionType : int;
        static const ArrayType : int;
        static const ConstructorType : int;
        static const GenericType : int;
        static const TypeQuery : int;

        static const InterfaceDeclaration : int;
        static const FunctionDeclaration : int;
        static const ModuleDeclaration : int;
        static const ClassDeclaration : int;
        static const EnumDeclaration : int;
        static const ImportDeclaration : int;
        static const ExportAssignment : int;

        static const MemberFunctionDeclaration : int;
        static const MemberVariableDeclaration : int;
        static const ConstructorDeclaration : int;
        static const IndexMemberDeclaration : int;

        static const GetAccessor : int;
        static const SetAccessor : int;

        static const PropertySignature : int;
        static const CallSignature : int;
        static const ConstructSignature : int;
        static const IndexSignature : int;
        static const MethodSignature : int;

        static const Block : int;
        static const IfStatement : int;
        static const VariableStatement : int;
        static const ExpressionStatement : int;
        static const ReturnStatement : int;
        static const SwitchStatement : int;
        static const BreakStatement : int;
        static const ContinueStatement : int;
        static const ForStatement : int;
        static const ForInStatement : int;
        static const EmptyStatement : int;
        static const ThrowStatement : int;
        static const WhileStatement : int;
        static const TryStatement : int;
        static const LabeledStatement : int;
        static const DoStatement : int;
        static const DebuggerStatement : int;
        static const WithStatement : int;

        static const PlusExpression : int;
        static const NegateExpression : int;
        static const BitwiseNotExpression : int;
        static const LogicalNotExpression : int;
        static const PreIncrementExpression : int;
        static const PreDecrementExpression : int;
        static const DeleteExpression : int;
        static const TypeOfExpression : int;
        static const VoidExpression : int;
        static const CommaExpression : int;
        static const AssignmentExpression : int;
        static const AddAssignmentExpression : int;
        static const SubtractAssignmentExpression : int;
        static const MultiplyAssignmentExpression : int;
        static const DivideAssignmentExpression : int;
        static const ModuloAssignmentExpression : int;
        static const AndAssignmentExpression : int;
        static const ExclusiveOrAssignmentExpression : int;
        static const OrAssignmentExpression : int;
        static const LeftShiftAssignmentExpression : int;
        static const SignedRightShiftAssignmentExpression : int;
        static const UnsignedRightShiftAssignmentExpression : int;
        static const ConditionalExpression : int;
        static const LogicalOrExpression : int;
        static const LogicalAndExpression : int;
        static const BitwiseOrExpression : int;
        static const BitwiseExclusiveOrExpression : int;
        static const BitwiseAndExpression : int;
        static const EqualsWithTypeConversionExpression : int;
        static const NotEqualsWithTypeConversionExpression : int;
        static const EqualsExpression : int;
        static const NotEqualsExpression : int;
        static const LessThanExpression : int;
        static const GreaterThanExpression : int;
        static const LessThanOrEqualExpression : int;
        static const GreaterThanOrEqualExpression : int;
        static const InstanceOfExpression : int;
        static const InExpression : int;
        static const LeftShiftExpression : int;
        static const SignedRightShiftExpression : int;
        static const UnsignedRightShiftExpression : int;
        static const MultiplyExpression : int;
        static const DivideExpression : int;
        static const ModuloExpression : int;
        static const AddExpression : int;
        static const SubtractExpression : int;
        static const PostIncrementExpression : int;
        static const PostDecrementExpression : int;
        static const MemberAccessExpression : int;
        static const InvocationExpression : int;
        static const ArrayLiteralExpression : int;
        static const ObjectLiteralExpression : int;
        static const ObjectCreationExpression : int;
        static const ParenthesizedExpression : int;
        static const ParenthesizedArrowFunctionExpression : int;
        static const SimpleArrowFunctionExpression : int;
        static const CastExpression : int;
        static const ElementAccessExpression : int;
        static const FunctionExpression : int;
        static const OmittedExpression : int;

        static const VariableDeclaration : int;
        static const VariableDeclarator : int;

        static const ArgumentList : int;
        static const ParameterList : int;
        static const TypeArgumentList : int;
        static const TypeParameterList : int;

        static const ExtendsHeritageClause : int;
        static const ImplementsHeritageClause : int;
        static const EqualsValueClause : int;
        static const CaseSwitchClause : int;
        static const DefaultSwitchClause : int;
        static const ElseClause : int;
        static const CatchClause : int;
        static const FinallyClause : int;

        static const TypeParameter : int;
        static const Constraint : int;

        static const SimplePropertyAssignment : int;
        static const FunctionPropertyAssignment : int;

        static const Parameter : int;
        static const EnumElement : int;
        static const TypeAnnotation : int;
        static const ExternalModuleReference : int;
        static const ModuleNameModuleReference : int;
        static const Last : int;

        static const FirstStandardKeyword : int;
        static const LastStandardKeyword : int;

        static const FirstFutureReservedKeyword : int;
        static const LastFutureReservedKeyword : int;

        static const FirstFutureReservedStrictKeyword : int;
        static const LastFutureReservedStrictKeyword : int;

        static const FirstTypeScriptKeyword : int;
        static const LastTypeScriptKeyword : int;

        static const FirstKeyword : int;
        static const LastKeyword : int;

        static const FirstToken : int;
        static const LastToken : int;

        static const FirstPunctuation : int;
        static const LastPunctuation : int;

        static const FirstFixedWidth : int;
        static const LastFixedWidth : int;

        static const FirstTrivia : int;
        static const LastTrivia : int;
    }

    class LineAndCharacter {
        var line : int;
        var character : int;
    }

    class ITypeSyntax extends TypeScript.ISyntaxNodeOrToken {
    }

    class INameSyntax extends TypeScript.ITypeSyntax {
    }

    class IModuleReferenceSyntax extends TypeScript.SyntaxNode {
        function isModuleReference(): boolean;
    }

    class ISyntaxToken extends TypeScript.ISyntaxNodeOrToken {
        var tokenKind : int;

        function text() : string;

        function value() : variant;
        function valueText() : string;

        function hasLeadingTrivia() : boolean;
        function hasLeadingComment() : boolean;
        function hasLeadingNewLine() : boolean;
        function hasLeadingSkippedText() : boolean;

        function hasTrailingTrivia() : boolean;
        function hasTrailingComment() : boolean;
        function hasTrailingNewLine() : boolean;
        function hasTrailingSkippedText() : boolean;

        function hasSkippedToken() : boolean;

        function clone() : TypeScript.ISyntaxToken;
    }

    class ISyntaxElement {
        function kind() : int;

        function isNode() : boolean;
        function isToken() : boolean;
        function isList() : boolean;
        function isSeparatedList() : boolean;

        function childCount() : int;
        function childAt(index: int) : TypeScript.ISyntaxElement;

        function isTypeScriptSpecific() : boolean;

        function isIncrementallyUnusable() : boolean;
        function fullWidth() : int;
        function width() : int;
        function fullText() : string;

        function leadingTrivia() : TypeScript.ISyntaxTriviaList;
        function trailingTrivia() : TypeScript.ISyntaxTriviaList;

        function leadingTriviaWidth() : int;
        function trailingTriviaWidth() : int;

        function firstToken() : TypeScript.ISyntaxToken;
        function lastToken() : TypeScript.ISyntaxToken;

        function collectTextElements(elements: string[]) : void;
    }

    class ISyntaxNodeOrToken extends TypeScript.ISyntaxElement {
        //accept(visitor: ISyntaxVisitor): any;
    }

    class ISyntaxList extends TypeScript.ISyntaxElement {
        function childAt(index: number): TypeScript.ISyntaxNodeOrToken;
        function toArray(): TypeScript.ISyntaxNodeOrToken[];
        function insertChildrenInto(array: TypeScript.ISyntaxElement[], index: number): void;
    }

    class ISyntaxTrivia {
        function kind() : int;
        function isWhitespace() : boolean;
        function isComment() : boolean;
        function isNewLine() : boolean;
        function isSkippedToken() : boolean;
        function fullWidth() : int;
        function fullText() : string;
        function skippedToken() : TypeScript.ISyntaxToken;
    }

    class ISyntaxTriviaList {
        function count() : int;
        function syntaxTriviaAt(index : int) : TypeScript.ISyntaxTrivia;
        function fullWidth() : int;
        function fullText() : string;
        function hasComment() : boolean;
        function hasNewLine() : boolean;
        function hasSkippedToken() : boolean;
        function last() : TypeScript.ISyntaxTrivia;
        function toArray() : TypeScript.ISyntaxTrivia[];
        function concat(trivia : TypeScript.ISyntaxTriviaList) : TypeScript.ISyntaxTriviaList;
        function collectTextElements(elements : string[]) : void;
    }

    class IExpressionSyntax extends TypeScript.ISyntaxNodeOrToken {
        function isExpression() : boolean;
    }

    class IModuleElementSyntax extends TypeScript.SyntaxNode {
    }

    class IPostfixExpressionSyntax extends TypeScript.IUnaryExpressionSyntax {
        function isPostfixExpression() : boolean;
    }

    class IMemberExpressionSyntax extends TypeScript.IPostfixExpressionSyntax {
        function isMemberExpression() : boolean;
    }

    class ISeparatedSyntaxList extends TypeScript.ISyntaxElement {
        function toArray() : TypeScript.ISyntaxNodeOrToken[];
        function toNonSeparatorArray() : TypeScript.ISyntaxNodeOrToken[];
        function separatorCount() : int;
        function separatorAt(index : int) : TypeScript.ISyntaxToken;
        function nonSeparatorCount() : int;
        function nonSeparatorAt(index : int) : TypeScript.ISyntaxNodeOrToken;
        function insertChildrenInto(array : TypeScript.ISyntaxElement[], index : int) : void;
    }

    class IStatementSyntax extends TypeScript.IModuleElementSyntax {
    }

    class IUnaryExpressionSyntax extends TypeScript.IExpressionSyntax {
        function isUnaryExpression() : boolean;
    }

    class PositionedToken {
        function token() : TypeScript.ISyntaxToken;
        function previousToken(includeSkippedTokens : boolean = false) : TypeScript.PositionedToken;
        function nextToken(includeSkippedTokens : boolean = false) : TypeScript.PositionedToken;
    }

    class LineMap {
        static const empty : TypeScript.LineMap;
        function toJSON() : variant;
        function equals(other : TypeScript.LineMap) : boolean;
        function lineStarts() : int[];
        function lineCount() : int;
        function getPosition(line : int, character : int) : int;
        function getLineNumberFromPosition(position : int) : int;
        function getLineStartPosition(lineNumber : int) : int;
        function fillLineAndCharacterFromPosition(position : int, lineAndCharacter : TypeScript.LineAndCharacter) : void;
        function getLineAndCharacterFromPosition(position : int) : TypeScript.LineAndCharacter;
    }

    class SyntaxNode extends TypeScript.ISyntaxNodeOrToken {
        function insertChildrenInto(array : TypeScript.ISyntaxElement[], index : int) : void;
        function toJSON() : variant;
        //function accept(visitor : TypeScript.ISyntaxVisitor) : variant;
        function replaceToken(token1 : TypeScript.ISyntaxToken, token2 : TypeScript.ISyntaxToken) : TypeScript.SyntaxNode;
        function hasLeadingTrivia() : boolean;
        function hasTrailingTrivia() : boolean;
        function parsedInStrictMode() : boolean;
        function findToken(position : int, includeSkippedTokens : boolean = false) : TypeScript.PositionedToken;
        function findTokenOnLeft(position : number, includeSkippedTokens : boolean = false) : TypeScript.PositionedToken;
        function findCompleteTokenOnLeft(position : number, includeSkippedTokens : boolean = false) : TypeScript.PositionedToken;
        function isModuleElement() : boolean;
        function isClassElement() : boolean;
        function isTypeMember() : boolean;
        function isStatement() : boolean;
        function isExpression() : boolean;
        function isSwitchClause() : boolean;
        function structuralEquals(node : TypeScript.SyntaxNode) : boolean;
    }

    class SourceUnitSyntax extends TypeScript.SyntaxNode {
        var moduleElements : TypeScript.ISyntaxList;
        var endOfFileToken : TypeScript.ISyntaxToken;
    }

    class ExternalModuleReferenceSyntax extends TypeScript.SyntaxNode {
        var requireKeyword : TypeScript.ISyntaxToken;
        var openParenToken : TypeScript.ISyntaxToken;
        var stringLiteral : TypeScript.ISyntaxToken;
        var closeParenToken : TypeScript.ISyntaxToken;

        function isModuleReference() : boolean;
    }

    class ModuleNameModuleReferenceSyntax extends TypeScript.SyntaxNode {
        var moduleName : TypeScript.INameSyntax;
        function isModuleReference() : boolean;
    }

    class ImportDeclarationSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var importKeyword : TypeScript.ISyntaxToken;
        var identifier : TypeScript.ISyntaxToken;
        var equalsToken : TypeScript.ISyntaxToken;
        var moduleReference : TypeScript.IModuleReferenceSyntax;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class ExportAssignmentSyntax extends TypeScript.SyntaxNode {
        var exportKeyword : TypeScript.ISyntaxToken;
        var equalsToken : TypeScript.ISyntaxToken;
        var identifier : TypeScript.ISyntaxToken;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class ClassDeclarationSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var classKeyword : TypeScript.ISyntaxToken;
        var identifier : TypeScript.ISyntaxToken;
        var typeParameterList : TypeScript.TypeParameterListSyntax;
        var heritageClauses : TypeScript.ISyntaxList;
        var openBraceToken : TypeScript.ISyntaxToken;
        var classElements : TypeScript.ISyntaxList;
        var closeBraceToken : TypeScript.ISyntaxToken;
    }

    class InterfaceDeclarationSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var interfaceKeyword : TypeScript.ISyntaxToken;
        var identifier : TypeScript.ISyntaxToken;
        var typeParameterList : TypeScript.TypeParameterListSyntax;
        var heritageClauses : TypeScript.ISyntaxList;
        var body : TypeScript.ObjectTypeSyntax;
    }

    class HeritageClauseSyntax extends TypeScript.SyntaxNode {
        var extendsOrImplementsKeyword : TypeScript.ISyntaxToken;
        var typeNames : TypeScript.ISeparatedSyntaxList;
    }

    class ModuleDeclarationSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var moduleKeyword : TypeScript.ISyntaxToken;
        var name : TypeScript.INameSyntax;
        var stringLiteral : TypeScript.ISyntaxToken;
        var openBraceToken : TypeScript.ISyntaxToken;
        var moduleElements : TypeScript.ISyntaxList;
        var closeBraceToken : TypeScript.ISyntaxToken;
    }

    class FunctionDeclarationSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var functionKeyword : TypeScript.ISyntaxToken;
        var identifier : TypeScript.ISyntaxToken;
        var callSignature : TypeScript.CallSignatureSyntax;
        var block : TypeScript.BlockSyntax;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class VariableStatementSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var variableDeclaration : TypeScript.VariableDeclarationSyntax;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class VariableDeclarationSyntax extends TypeScript.SyntaxNode {
        var varKeyword : TypeScript.ISyntaxToken;
        var variableDeclarators : TypeScript.ISeparatedSyntaxList;
    }

    class VariableDeclaratorSyntax extends TypeScript.SyntaxNode {
        var propertyName : TypeScript.ISyntaxToken;
        var typeAnnotation : TypeScript.TypeAnnotationSyntax;
        var equalsValueClause : TypeScript.EqualsValueClauseSyntax;
    }

    class EqualsValueClauseSyntax extends TypeScript.SyntaxNode {
        var equalsToken : TypeScript.ISyntaxToken;
        var value : TypeScript.IExpressionSyntax;
    }

    class PrefixUnaryExpressionSyntax extends TypeScript.SyntaxNode {
        var operatorToken : TypeScript.ISyntaxToken;
        var operand : TypeScript.IUnaryExpressionSyntax;

        function isUnaryExpression() : boolean;
    }

    class ArrayLiteralExpressionSyntax extends TypeScript.SyntaxNode {
        var openBracketToken : TypeScript.ISyntaxToken;
        var expressions : TypeScript.ISeparatedSyntaxList;
        var closeBracketToken : TypeScript.ISyntaxToken;

        function isPrimaryExpression() : boolean;
        function isMemberExpression() : boolean;
        function isPostfixExpression() : boolean;
        function isUnaryExpression() : boolean;
    }

    class OmittedExpressionSyntax extends TypeScript.SyntaxNode {
    }

    class ParenthesizedExpressionSyntax extends TypeScript.SyntaxNode {
        var openParenToken : TypeScript.ISyntaxToken;
        var expression : TypeScript.IExpressionSyntax;
        var closeParenToken : TypeScript.ISyntaxToken;

        function isPrimaryExpression() : boolean;
        function isMemberExpression() : boolean;
        function isPostfixExpression() : boolean;
        function isUnaryExpression() : boolean;
    }

    class SimpleArrowFunctionExpressionSyntax extends TypeScript.SyntaxNode {
        var identifier : TypeScript.ISyntaxToken;
        var equalsGreaterThanToken : TypeScript.ISyntaxToken;
        var block : TypeScript.BlockSyntax;
        var expression : TypeScript.IExpressionSyntax;

        function isArrowFunctionExpression() : boolean;
        function isUnaryExpression() : boolean;
    }

    class ParenthesizedArrowFunctionExpressionSyntax extends TypeScript.SyntaxNode {
        var callSignature : TypeScript.CallSignatureSyntax;
        var equalsGreaterThanToken : TypeScript.ISyntaxToken;
        var block : TypeScript.BlockSyntax;
        var expression : TypeScript.IExpressionSyntax;

        function isArrowFunctionExpression() : boolean;
        function isUnaryExpression() : boolean;
    }

    class QualifiedNameSyntax extends TypeScript.SyntaxNode {
        var left : TypeScript.INameSyntax;
        var dotToken : TypeScript.ISyntaxToken;
        var right : TypeScript.ISyntaxToken;

        function isName() : boolean;
        function isType() : boolean;
    }

    class TypeArgumentListSyntax extends TypeScript.SyntaxNode {
        var lessThanToken : TypeScript.ISyntaxToken;
        var typeArguments : TypeScript.ISeparatedSyntaxList;
        var greaterThanToken : TypeScript.ISyntaxToken;
    }

    class ConstructorTypeSyntax extends TypeScript.SyntaxNode {
        var newKeyword : TypeScript.ISyntaxToken;
        var typeParameterList : TypeScript.TypeParameterListSyntax;
        var parameterList : TypeScript.ParameterListSyntax;
        var equalsGreaterThanToken : TypeScript.ISyntaxToken;
        var type : TypeScript.ITypeSyntax;

        function isType() : boolean;
    }

    class FunctionTypeSyntax extends TypeScript.SyntaxNode {
        var typeParameterList : TypeScript.TypeParameterListSyntax;
        var parameterList : TypeScript.ParameterListSyntax;
        var equalsGreaterThanToken : TypeScript.ISyntaxToken;
        var type : TypeScript.ITypeSyntax;

        function isType() : boolean;
    }

    class ObjectTypeSyntax extends TypeScript.SyntaxNode {
        var openBraceToken : TypeScript.ISyntaxToken;
        var typeMembers : TypeScript.ISeparatedSyntaxList;
        var closeBraceToken : TypeScript.ISyntaxToken;

        function isType() : boolean;
    }

    class ArrayTypeSyntax extends TypeScript.SyntaxNode {
        var type : TypeScript.ITypeSyntax;
        var openBracketToken : TypeScript.ISyntaxToken;
        var closeBracketToken : TypeScript.ISyntaxToken;

        function isType() : boolean;
    }

    class GenericTypeSyntax extends TypeScript.SyntaxNode {
        var name : TypeScript.INameSyntax;
        var typeArgumentList : TypeScript.TypeArgumentListSyntax;

        function isType() : boolean;
    }

    class TypeQuerySyntax extends TypeScript.SyntaxNode {
        var typeOfKeyword : TypeScript.ISyntaxToken;
        var name : TypeScript.INameSyntax;

        function isType() : boolean;
    }

    class TypeAnnotationSyntax extends TypeScript.SyntaxNode {
        var colonToken : TypeScript.ISyntaxToken;
        var type : TypeScript.ITypeSyntax;
    }

    class BlockSyntax extends TypeScript.SyntaxNode {
        var openBraceToken : TypeScript.ISyntaxToken;
        var statements : TypeScript.ISyntaxList;
        var closeBraceToken : TypeScript.ISyntaxToken;
    }

    class ParameterSyntax extends TypeScript.SyntaxNode {
        var dotDotDotToken : TypeScript.ISyntaxToken;
        var modifiers : TypeScript.ISyntaxList;
        var identifier : TypeScript.ISyntaxToken;
        var questionToken : TypeScript.ISyntaxToken;
        var typeAnnotation : TypeScript.TypeAnnotationSyntax;
        var equalsValueClause : TypeScript.EqualsValueClauseSyntax;
    }

    class MemberAccessExpressionSyntax extends TypeScript.SyntaxNode {
        var expression : TypeScript.IExpressionSyntax;
        var dotToken : TypeScript.ISyntaxToken;
        var name : TypeScript.ISyntaxToken;

        function isMemberExpression() : boolean;
        function isPostfixExpression() : boolean;
        function isUnaryExpression() : boolean;
    }

    class PostfixUnaryExpressionSyntax extends TypeScript.SyntaxNode {
        var operand : TypeScript.IMemberExpressionSyntax;
        var operatorToken : TypeScript.ISyntaxToken;

        function isPostfixExpression() : boolean;
        function isUnaryExpression() : boolean;
    }

    class ElementAccessExpressionSyntax extends TypeScript.SyntaxNode {
        var expression : TypeScript.IExpressionSyntax;
        var openBracketToken : TypeScript.ISyntaxToken;
        var argumentExpression : TypeScript.IExpressionSyntax;
        var closeBracketToken : TypeScript.ISyntaxToken;

        function isMemberExpression() : boolean;
        function isPostfixExpression() : boolean;
        function isUnaryExpression() : boolean;
    }

    class InvocationExpressionSyntax extends TypeScript.SyntaxNode {
        var expression : TypeScript.IExpressionSyntax;
        var argumentList : TypeScript.ArgumentListSyntax;

        function isMemberExpression() : boolean;
        function isPostfixExpression() : boolean;
        function isUnaryExpression() : boolean;
    }

    class ArgumentListSyntax extends TypeScript.SyntaxNode {
        var typeArgumentList : TypeScript.TypeArgumentListSyntax;
        var openParenToken : TypeScript.ISyntaxToken;
        var arguments : TypeScript.ISeparatedSyntaxList;
        var closeParenToken : TypeScript.ISyntaxToken;
    }

    class BinaryExpressionSyntax extends TypeScript.SyntaxNode {
        var left : TypeScript.IExpressionSyntax;
        var operatorToken : TypeScript.ISyntaxToken;
        var right : TypeScript.IExpressionSyntax;
    }

    class ConditionalExpressionSyntax extends TypeScript.SyntaxNode {
        var condition : TypeScript.IExpressionSyntax;
        var questionToken : TypeScript.ISyntaxToken;
        var whenTrue : TypeScript.IExpressionSyntax;
        var colonToken : TypeScript.ISyntaxToken;
        var whenFalse : TypeScript.IExpressionSyntax;
    }

    class ConstructSignatureSyntax extends TypeScript.SyntaxNode {
        var newKeyword : TypeScript.ISyntaxToken;
        var callSignature : TypeScript.CallSignatureSyntax;
    }

    class MethodSignatureSyntax extends TypeScript.SyntaxNode {
        var propertyName : TypeScript.ISyntaxToken;
        var questionToken : TypeScript.ISyntaxToken;
        var callSignature : TypeScript.CallSignatureSyntax;

    }

    class IndexSignatureSyntax extends TypeScript.SyntaxNode {
        var openBracketToken : TypeScript.ISyntaxToken;
        var parameter : TypeScript.ParameterSyntax;
        var closeBracketToken : TypeScript.ISyntaxToken;
        var typeAnnotation : TypeScript.TypeAnnotationSyntax;
    }

    class PropertySignatureSyntax extends TypeScript.SyntaxNode {
        var propertyName : TypeScript.ISyntaxToken;
        var questionToken : TypeScript.ISyntaxToken;
        var typeAnnotation : TypeScript.TypeAnnotationSyntax;
    }

    class CallSignatureSyntax extends TypeScript.SyntaxNode {
        var typeParameterList : TypeScript.TypeParameterListSyntax;
        var parameterList : TypeScript.ParameterListSyntax;
        var typeAnnotation : TypeScript.TypeAnnotationSyntax;
    }

    class ParameterListSyntax extends TypeScript.SyntaxNode {
        var openParenToken : TypeScript.ISyntaxToken;
        var parameters : TypeScript.ISeparatedSyntaxList;
        var closeParenToken : TypeScript.ISyntaxToken;
    }

    class TypeParameterListSyntax extends TypeScript.SyntaxNode {
        var lessThanToken : TypeScript.ISyntaxToken;
        var typeParameters : TypeScript.ISeparatedSyntaxList;
        var greaterThanToken : TypeScript.ISyntaxToken;
    }

    class TypeParameterSyntax extends TypeScript.SyntaxNode {
        var identifier : TypeScript.ISyntaxToken;
        var constraint : TypeScript.ConstraintSyntax;
    }

    class ConstraintSyntax extends TypeScript.SyntaxNode {
        var extendsKeyword : TypeScript.ISyntaxToken;
        var type : TypeScript.ITypeSyntax;
    }

    class ElseClauseSyntax extends TypeScript.SyntaxNode {
        var elseKeyword : TypeScript.ISyntaxToken;
        var statement : TypeScript.IStatementSyntax;
    }

    class IfStatementSyntax extends TypeScript.SyntaxNode {
        var ifKeyword : TypeScript.ISyntaxToken;
        var openParenToken : TypeScript.ISyntaxToken;
        var condition : TypeScript.IExpressionSyntax;
        var closeParenToken : TypeScript.ISyntaxToken;
        var statement : TypeScript.IStatementSyntax;
        var elseClause : TypeScript.ElseClauseSyntax;
    }

    class ExpressionStatementSyntax extends TypeScript.SyntaxNode {
        var expression : TypeScript.IExpressionSyntax;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class ConstructorDeclarationSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var constructorKeyword : TypeScript.ISyntaxToken;
        var callSignature : TypeScript.CallSignatureSyntax;
        var block : TypeScript.BlockSyntax;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class MemberFunctionDeclarationSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var propertyName : TypeScript.ISyntaxToken;
        var callSignature : TypeScript.CallSignatureSyntax;
        var block : TypeScript.BlockSyntax;
        var semicolonToken : TypeScript.ISyntaxToken;

        function isMemberDeclaration() : boolean;
    }

    class GetAccessorSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var getKeyword : TypeScript.ISyntaxToken;
        var propertyName : TypeScript.ISyntaxToken;
        var parameterList : TypeScript.ParameterListSyntax;
        var typeAnnotation : TypeScript.TypeAnnotationSyntax;
        var block : TypeScript.BlockSyntax;

        function isMemberDeclaration() : boolean;
        function isPropertyAssignment() : boolean;
    }

    class SetAccessorSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var setKeyword : TypeScript.ISyntaxToken;
        var propertyName : TypeScript.ISyntaxToken;
        var parameterList : TypeScript.ParameterListSyntax;
        var block : TypeScript.BlockSyntax;

        function isMemberDeclaration() : boolean;
        function isPropertyAssignment() : boolean;
    }

    class MemberVariableDeclarationSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var variableDeclarator : TypeScript.VariableDeclaratorSyntax;
        var semicolonToken : TypeScript.ISyntaxToken;

        function isMemberDeclaration() : boolean;
    }

    class IndexMemberDeclarationSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var indexSignature : TypeScript.IndexSignatureSyntax;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class ThrowStatementSyntax extends TypeScript.SyntaxNode {
        var throwKeyword : TypeScript.ISyntaxToken;
        var expression : TypeScript.IExpressionSyntax;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class ReturnStatementSyntax extends TypeScript.SyntaxNode {
        var returnKeyword : TypeScript.ISyntaxToken;
        var expression : TypeScript.IExpressionSyntax;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class ObjectCreationExpressionSyntax extends TypeScript.SyntaxNode {
        var newKeyword : TypeScript.ISyntaxToken;
        var expression : TypeScript.IMemberExpressionSyntax;
        var argumentList : TypeScript.ArgumentListSyntax;

        function isMemberDeclaration() : boolean;
        function isPropertyAssignment() : boolean;
        function isUnaryExpression() : boolean;
    }

    class SwitchStatementSyntax extends TypeScript.SyntaxNode {
        var switchKeyword : TypeScript.ISyntaxToken;
        var openParenToken : TypeScript.ISyntaxToken;
        var expression : TypeScript.IExpressionSyntax;
        var closeParenToken : TypeScript.ISyntaxToken;
        var openBraceToken : TypeScript.ISyntaxToken;
        var switchClauses : TypeScript.ISyntaxList;
        var closeBraceToken : TypeScript.ISyntaxToken;
    }

    class CaseSwitchClauseSyntax extends TypeScript.SyntaxNode {
        var caseKeyword : TypeScript.ISyntaxToken;
        var expression : TypeScript.IExpressionSyntax;
        var colonToken : TypeScript.ISyntaxToken;
        var statements : TypeScript.ISyntaxList;
    }

    class DefaultSwitchClauseSyntax extends TypeScript.SyntaxNode {
        var defaultKeyword : TypeScript.ISyntaxToken;
        var colonToken : TypeScript.ISyntaxToken;
        var statements : TypeScript.ISyntaxList;
    }

    class BreakStatementSyntax extends TypeScript.SyntaxNode {
        var breakKeyword : TypeScript.ISyntaxToken;
        var identifier : TypeScript.ISyntaxToken;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class ContinueStatementSyntax extends TypeScript.SyntaxNode {
        var continueKeyword : TypeScript.ISyntaxToken;
        var identifier : TypeScript.ISyntaxToken;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class ForStatementSyntax extends TypeScript.SyntaxNode {
        var forKeyword : TypeScript.ISyntaxToken;
        var openParenToken : TypeScript.ISyntaxToken;
        var variableDeclaration : TypeScript.VariableDeclarationSyntax;
        var initializer : TypeScript.IExpressionSyntax;
        var firstSemicolonToken : TypeScript.ISyntaxToken;
        var condition : TypeScript.IExpressionSyntax;
        var secondSemicolonToken : TypeScript.ISyntaxToken;
        var incrementor : TypeScript.IExpressionSyntax;
        var closeParenToken : TypeScript.ISyntaxToken;
        var statement : TypeScript.IStatementSyntax;

        function isIterationStatement() : boolean;
    }

    class ForInStatementSyntax extends TypeScript.SyntaxNode {
        var forKeyword : TypeScript.ISyntaxToken;
        var openParenToken : TypeScript.ISyntaxToken;
        var variableDeclaration : TypeScript.VariableDeclarationSyntax;
        var left : TypeScript.IExpressionSyntax;
        var inKeyword : TypeScript.ISyntaxToken;
        var expression : TypeScript.IExpressionSyntax;
        var closeParenToken : TypeScript.ISyntaxToken;
        var statement : TypeScript.IStatementSyntax;

        function isIterationStatement() : boolean;
    }

    class WhileStatementSyntax extends TypeScript.SyntaxNode {
        var whileKeyword : TypeScript.ISyntaxToken;
        var openParenToken : TypeScript.ISyntaxToken;
        var condition : TypeScript.IExpressionSyntax;
        var closeParenToken : TypeScript.ISyntaxToken;
        var statement : TypeScript.IStatementSyntax;

        function isIterationStatement() : boolean;
    }

    class WithStatementSyntax extends TypeScript.SyntaxNode {
        var withKeyword : TypeScript.ISyntaxToken;
        var openParenToken : TypeScript.ISyntaxToken;
        var condition : TypeScript.IExpressionSyntax;
        var closeParenToken : TypeScript.ISyntaxToken;
        var statement : TypeScript.IStatementSyntax;
    }

    class EnumDeclarationSyntax extends TypeScript.SyntaxNode {
        var modifiers : TypeScript.ISyntaxList;
        var enumKeyword : TypeScript.ISyntaxToken;
        var identifier : TypeScript.ISyntaxToken;
        var openBraceToken : TypeScript.ISyntaxToken;
        var enumElements : TypeScript.ISeparatedSyntaxList;
        var closeBraceToken : TypeScript.ISyntaxToken;
    }

    class EnumElementSyntax extends TypeScript.SyntaxNode {
        var propertyName : TypeScript.ISyntaxToken;
        var equalsValueClause : TypeScript.EqualsValueClauseSyntax;
    }

    class CastExpressionSyntax extends TypeScript.SyntaxNode {
        var lessThanToken : TypeScript.ISyntaxToken;
        var type : TypeScript.ITypeSyntax;
        var greaterThanToken : TypeScript.ISyntaxToken;
        var expression : TypeScript.IUnaryExpressionSyntax;

        function isUnaryExpression() : boolean;
    }

    class ObjectLiteralExpressionSyntax extends TypeScript.SyntaxNode {
        var openBraceToken : TypeScript.ISyntaxToken;
        var propertyAssignments : TypeScript.ISeparatedSyntaxList;
        var closeBraceToken : TypeScript.ISyntaxToken;

        function isPrimaryExpression() : boolean;
        function isMemberDeclaration() : boolean;
        function isPostfixExpression() : boolean;
        function isUnaryExpression() : boolean;
    }

    class SimplePropertyAssignmentSyntax extends TypeScript.SyntaxNode {
        var propertyName : TypeScript.ISyntaxToken;
        var colonToken : TypeScript.ISyntaxToken;
        var expression : TypeScript.IExpressionSyntax;

        function isPropertyAssignment() : boolean;
    }

    class FunctionPropertyAssignmentSyntax extends TypeScript.SyntaxNode {
        var propertyName : TypeScript.ISyntaxToken;
        var callSignature : TypeScript.CallSignatureSyntax;
        var block : TypeScript.BlockSyntax;

        function isPropertyAssignment() : boolean;
    }

    class FunctionExpressionSyntax extends TypeScript.SyntaxNode {
        var functionKeyword : TypeScript.ISyntaxToken;
        var identifier : TypeScript.ISyntaxToken;
        var callSignature : TypeScript.CallSignatureSyntax;
        var block : TypeScript.BlockSyntax;

        function isPrimaryExpression() : boolean;
        function isMemberDeclaration() : boolean;
        function isPostfixExpression() : boolean;
        function isUnaryExpression() : boolean;
    }

    class EmptyStatementSyntax extends TypeScript.SyntaxNode {
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class TryStatementSyntax extends TypeScript.SyntaxNode {
        var tryKeyword : TypeScript.ISyntaxToken;
        var block : TypeScript.BlockSyntax;
        var catchClause : TypeScript.CatchClauseSyntax;
        var finallyClause : TypeScript.FinallyClauseSyntax;
    }

    class CatchClauseSyntax extends TypeScript.SyntaxNode {
        var catchKeyword : TypeScript.ISyntaxToken;
        var openParenToken : TypeScript.ISyntaxToken;
        var identifier : TypeScript.ISyntaxToken;
        var typeAnnotation : TypeScript.TypeAnnotationSyntax;
        var closeParenToken : TypeScript.ISyntaxToken;
        var block : TypeScript.BlockSyntax;
    }

    class FinallyClauseSyntax extends TypeScript.SyntaxNode {
        var finallyKeyword : TypeScript.ISyntaxToken;
        var block : TypeScript.BlockSyntax;
    }

    class LabeledStatementSyntax extends TypeScript.SyntaxNode {
        var identifier : TypeScript.ISyntaxToken;
        var colonToken : TypeScript.ISyntaxToken;
        var statement : TypeScript.IStatementSyntax;
    }

    class DoStatementSyntax extends TypeScript.SyntaxNode {
        var doKeyword : TypeScript.ISyntaxToken;
        var statement : TypeScript.IStatementSyntax;
        var whileKeyword : TypeScript.ISyntaxToken;
        var openParenToken : TypeScript.ISyntaxToken;
        var condition : TypeScript.IExpressionSyntax;
        var closeParenToken : TypeScript.ISyntaxToken;
        var semicolonToken : TypeScript.ISyntaxToken;

        function isIterationStatement() : boolean;
    }

    class TypeOfExpressionSyntax extends TypeScript.SyntaxNode {
        var typeOfKeyword : TypeScript.ISyntaxToken;
        var expression : TypeScript.IUnaryExpressionSyntax;

        function isUnaryExpression() : boolean;
    }

    class DeleteExpressionSyntax extends TypeScript.SyntaxNode {
        var deleteKeyword : TypeScript.ISyntaxToken;
        var expression : TypeScript.IUnaryExpressionSyntax;

        function isUnaryExpression() : boolean;
    }

    class VoidExpressionSyntax extends TypeScript.SyntaxNode {
        var voidKeyword : TypeScript.ISyntaxToken;
        var expression : TypeScript.IUnaryExpressionSyntax;

        function isUnaryExpression() : boolean;
    }

    class DebuggerStatementSyntax extends TypeScript.SyntaxNode {
        var debuggerKeyword : TypeScript.ISyntaxToken;
        var semicolonToken : TypeScript.ISyntaxToken;
    }

    class LanguageVersion {
        static const EcmaScript3 = 0;
        static const EcmaScript5 = 1;
    }

    class ParseOptions {
        function toJSON() : variant;
        function languageVersion() : int;
        function allowAutomaticSemicolonInsertion() : boolean;
    }

    class SyntaxTree {
        function toJSON() : variant;
        function sourceUnit() : TypeScript.SourceUnitSyntax;
        function isDeclaration() : boolean;
        //function diagnostics() : Diagnostic[];
        function fileName() : string;
        function lineMap() : TypeScript.LineMap;
        function parseOptions() : TypeScript.ParseOptions;
        function structuralEquals(tree : TypeScript.SyntaxTree) : boolean;
    }

    class Parser {
        static function parse (filename : string, source : string, isdts : boolean = false) : TypeScript.SyntaxTree;
    }
} = """
(function () {
var TypeScript = {};
