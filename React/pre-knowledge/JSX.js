/**
 * Created by jwdn on 2016/11/4.
 */

// JSX语法，像是在Javascript代码里直接写XML的语法，
// 实质上这只是一个语法糖，每一个XML标签都会被JSX转换工具转换成纯Javascript代码，
// React 官方推荐使用JSX， 当然你想直接使用纯Javascript代码写也是可以的，只是使用JSX，
// 组件的结构和组件之间的关系看上去更加清晰。




//使用JSX
React.render(
<div>
    <div>
        <div>content</div>
    </div>
</div>,
    document.getElementById('example')
);
//不使用JSX
React.render(
    React.createElement('div', null,
        React.createElement('div', null,
            React.createElement('div', null, 'content')
        )
    ),
    document.getElementById('example')
);
// 那么也就是说，我们写一个XML标签，实质上就是在调用 React.createElement 这个方法，并返回一个 ReactElement 对象。

    //  ReactElement createElement(
    //  string/ReactClass type,
    //  [object props],
    //  [children ...]
)
// 这个方法的第一个参数可以是一个字符串，表示是一个HTML标准内的元素，
// 或者是一个ReactClass类型的对象，表示我们之前封装好的自定义组件。
// 第二个参数是一个对象，或者说是字典也可以，它保存了这个元素的所有固有属性（即传入后基本不会改变的值）。
// 从第三个参数开始，之后的参数都被认作是元素的子元素。
//
// 转化
//
// React JSX将类似XML的语法转化到原生的JavaScript，
// 元素的标签、属性和子元素都会被当作参数传给 React.createElement 方法：
//
// #JSX
var Nav;
var app = <Nav color="blue" />;

// #native JS
var Nav;
var app = React.createElement(Nav, {color:"blue"});
//
// JSX转化器
// 要把带有JSX语法的代码转化为纯Javascript代码，有多种方式，
// 对于内联与HTML中的代码或者是未经过转化的外部文件，在 script 标签中要加上 type="text/jsx" ，
// 并引入 JSXTransformer.js 文件即可，不过这种方式并不建议在生产环境使用，
// 建议的方法是在代码上线前就将代码转换好，可以使用 npm 全局安装 react-tools ：
//
// npm install -g react-tools
// 并使用命令行工具转化即可（具体用法可以参考 jsx -h ）：
//
// jsx src/ build/
// 如果使用自动化工具，比如 gulp 的话，可以使用相应插件 gulp-react 。



//     HTML 标签 vs. React 组件
//
// React.render方法可以渲染HTML结构，也可以渲染React组件。
//
// 渲染HTML标签，声明变量采用 首字母小写

var myDivElement = <div className="foo" />;
React.render(myDivElement, document.body);

// 渲染React组件，声明变量采用 首字母大写

var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
React.render(myElement, document.body);
// React 的 JSX 使用大写和小写字母来区分本地的组件类和 HTML 标签.
//
//     不过需要注意的是 class 和 for 这两个属性，
// JSX语法最终是要被转换为纯Javascript的，所以要和在Javascript DOM中一样，
// 用 className 和 htmlFor 。

//使用JSX
React.render(
<label className="xxx" htmlFor="input">content</label>,
    document.getElementById('example')
);
//不使用JSX
React.render(
    React.createElement('label', {className: 'xxx', htmlFor: 'input'}, 'content'),
    document.getElementById('example')
);
// 还有一点是，在创建HTML标准内的元素时，JSX转化器会丢弃那些非标准的属性，
// 如果一定要添加自定义属性，那么需要在这些自定义属性之前添加 data- 前缀。

<div data-custom-attribute="foo" />

//     命名空间式组件
//
// 比如开发组件的时候，一个组件有多个子组件，
// 你希望这些子组件可以作为其父组件的属性，那么可以像这样用：

var Form = MyFormComponent;

var App = (
    <Form>
    <Form.Row>
    <Form.Label />
    <Form.Input />
    </Form.Row>
    </Form>
);
// 这样你只需将子组件的 ReactClass 作为其父组件的属性：

var MyFormComponent = React.createClass({ ... });

MyFormComponent.Row = React.createClass({ ... });
MyFormComponent.Label = React.createClass({ ... });
MyFormComponent.Input = React.createClass({ ... });

// 而创建子元素可以直接交给JSX转化器：

var App = (
    React.createElement(Form, null,
        React.createElement(Form.Row, null,
            React.createElement(Form.Label, null),
            React.createElement(Form.Input, null)
        )
    )
);
// 该功能需要0.11及以上版本
//
// Javascript表达式
//
// 在JSX语法中写Javascript表达式只需要用 {} 即可，比如下面这个使用三目运算符的例子：
//
// JSX是HTML和JavaScript混写的语法，当遇到 < ，JSX就当HTML解析，遇到 { 就当JavaScript解析。

// Input (JSX):
    var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>;
// Output (JS):
    var content = React.createElement(
        Container,
        null,
        window.isLoggedIn ? React.createElement(Nav) : React.createElement(Login)
    );
    // 属性表达式

    React.render(
    <div className={2 > 1 ? 'class-a' : 'class-b'}>content</div>,
        document.body
);
    // 子表达式

    var Nav = React.createClass({
        render: function () {
            return <div>nav</div>
        }
    });
    React.render(
    <div>
    {2 > 1 ? <Nav/> : <div>div</div>}
</div>,
        document.body
);
//     不过要注意的是，JSX语法只是语法糖，
// 它的背后是调用 ReactElement 的构造方法 React.createElement 的，
// 所以类似这样的写法是不可以的：

// This JSX:
<div id={if (condition) { 'msg' }}>Hello World!</div>

// Is transformed to this JS:
    React.createElement("div", {id: if (condition) { 'msg' }}, "Hello World!");
    // 可以从转化后的Javascript代码中看出明显的语法错误，所以要不用三目运算符，要不就这样写：

if (condition) <div id='msg'>Hello World!</div>
else <div>Hello World!</div>


//     传播属性（Spread Attributes）
// 如果提前就知道了组件的属性的话，写起来很容易。例如component组件有两个动态的属性foo和bar：

var component = <Component foo={x} bar={y} />;
    // 而实际上，有些属性可能是后续添加的，我们没办法一开始就确定，我们可能会写出下面不好的代码：

var component = <Component />;
    component.props.foo = x; // bad
    component.props.bar = y; // also bad
//     这样写是错误的，因为我们手动直接添加的属性React后续没办法检查到属性类型错误，也就是说，当我们手动添加的属性发生类型错误时，在控制台是看不到错误信息的。
//
// 在React的设定中，初始化完props后，props是不可变的。改变props会引起无法想象的后果。

// 延伸属性
// 为了解决这个问题，React引入了属性延伸

    var props = {};
    props.foo = x;
    props.bar = y;
    var component = <Component {...props} />;
//或者
    var props = { foo: x, bar: y };
    var component = <Component { ...props } />;
    // 这样就相当于：

var component = <Component foo={x} bar={y} />
// 当需要拓展我们的属性的时候，定义个一个属性对象，
// 并通过 {…props} 的方式引入，在JSX中，可以使用 ... 运算符，
// 表示将一个对象的键值对与 ReactElement 的 props 属性合并，
// 这个 ... 运算符的实现类似于ES6 Array中的 ... 运算符的特性。
// ，React会帮我们拷贝到组件的props属性中。重要的是—这个过程是由React操控的，
// 不是手动添赋值的属性。

// 它也可以和普通的XML属性混合使用，需要同名属性，后者将覆盖前者：
var props = { foo: 'default' };
    var component = <Component {...props} foo={'override'} />;
    console.log(component.props.foo); // 'override'


// JSX 陷阱
//
// style属性
// 在React中写行内样式时，要这样写，不能采用引号的书写方式

    React.render(
    <div style={{color:'red'}}>
    xxxxx
    </div>,
        document.body
);

// HTML转义
//
// 比如我们有一些内容是用户输入的富文本，从后台取到数据后展示在页面上，希望展示相应的样式

var content='<strong>content</strong>';

React.render(
    <div>{content}</div>,
    document.body
);
    // 结果页面直接输出内容了：

<strong>content</strong>
// React默认会进行HTML的转义，避免XSS攻击，如果要不转义，可以这么写：

var content='<strong>content</strong>';

    React.render(
    <div dangerouslySetInnerHTML={{__html: content}}></div>,
        document.body
);
// React 中有三个非 DOM 属性：key、ref 和 dangerouslySetInnerHTML，本课时详细讲解这三个属性的产生原因和用法。