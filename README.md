# React

- [https://reactjs.org/](https://reactjs.org/)
- React là một thư viện Javascript để xây dựng giao diện người dùng.
- React hỗ trợ xây dựng trang web theo hướng single page application (SPA) [https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering](https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering)
- VSCode extensions:
  ◦ [https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  ◦ [https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx)
- Browser extensions:
  ◦ [https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## 1. Create-react-app

- [https://create-react-app.dev/](https://create-react-app.dev/)
- Cài đặt: npx create-react-app project-name
- CRA cung cấp bộ công cụ khởi tạo ứng dụng React, vì vậy bạn có thể đi vào xây dựng ứng dụng của mình mà không cần phải xử lý các cấu hình Webpack và Babel.

## 2. Component

- Components giúp phân chia những đoạn code của UI (giao diện người dùng) thành các phần độc lập để dễ dàng quản lý và tái sử dụng.
- Về cơ bản, component cũng giống một javascript function return về những phần tử React mô tả những gì sẽ xuất hiện trên giao diện.
- Luôn luôn bắt đầu component name với chữ cái in hoa React sẽ coi những component bắt đầu với chữ cái in thường là DOM tags. Ví dụ, `<div />` đại diện cho 1 thẻ div HTML, nhưng `<Welcome />` đại diện cho 1 component
- Có 2 loại component

```jsx
// Function component
function App() {
	return (
		<div>Hello World!!!<div>
	)
}
```

```jsx
// Class component
class App extends React.Component {
	render() {
		return (
			<div>Hello World!!!<div>
		)
	}
}
```

- Snippets để tạo nhanh component:
- Function component: `rfce`
- Class component: `rcc`

## 3. JSX

- JSX = Javascript + XML
- React sử dụng JSX để biểu thị UI components
- JSX cho phép viết các phần tử HTML bằng JavaScript và đặt chúng trong DOM mà không cần bất kỳ phương thức như createElement() hoặc appendChild().
- Cú pháp JSX

```jsx
const title = "BC42 - React";
const jsx = (
  <section className="app">
    <h1>{title}</h1>
  </section>
);
```

- Code JSX nếu được viết bằng Javascript thuần

```jsx
const title = "BC42 - React";
const jsx = React.createElement(
  "section",
  { className: "app" },
  React.createElement("h1", null, title)
);
```

- Vì JSX gần với JavaScript hơn là so với HTML, React sử dụng chuẩn quy tắc đặt tên camelCase cho thuộc tính thay vì dùng tên thuộc tính gốc của HTML.

```jsx
/* className thay cho class */
<h1 className="title">Hello World!!!<div>

/* htmlFor thay cho for */
<label htmlFor="username">Username</label>
<input type="text" id="username" />
```

## 4. Data binding

- Dấu ngoặc nhọn {} cho phép bạn viết các biểu thức JavaScript bên trong JSX

```jsx
const user = { name: "Alice", imgUrl: "..." };
return (
  <div>
    <h1>{user.name}</h1>
    <img className="avatar" src={user.imageUrl} />
  </div>
);
```

## 5. Conditional rendering

- Bạn có thể sử dụng if else để hiển thị nội dung khác nhau dựa trên điều kiện

```jsx
const isLoggedIn = true;
let content;
if (isLoggedIn) {
  content = <button>Logout</button>;
} else {
  content = <button>Login</button>;
}
return <div>{content}</div>;
```

- Bạn có thể sử dụng toán tử 3 ngôi để hiển thị nội dung bên trong JSX

```jsx
const isLoggedIn = true;
return (
  <div>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</div>
);
```

- Nếu chỉ muốn hiển thị nội dung khi điều kiện đúng, bạn có thể sử dụng toán tử &&

```jsx
const isLoggedIn = true;
return <div>{isLoggedIn && <button>Logout</button>}</div>;
```

## 6. List rendering

- Với JSX, bạn có thể sử dụng toán tử map để render một mảng dữ liệu thành một mảng các phần tử

```jsx
const users = [
  { id: 1, name: "Alice", imgUrl: "..." },
  { id: 2, name: "Bob", imgUrl: "..." },
  { id: 3, name: "Charlie", imgUrl: "..." },
];
return (
  <div>
    {users.map((user) => (
      <div key={user.id}>
        <h1>{user.name}</h1>
        <img className="avatar" src={user.imageUrl} />
      </div>
    ))}
  </div>
);
```

## 7. Event

- Các sự kiện trong React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange
- Với JSX, truyền một hàm làm trình xử lý sự kiện, thay vì một chuỗi.
- Không gọi hàm xử lý sự kiện, ta chỉ đưa hàm vào trong onClick và React sẽ tự gọi đến hàm đó khi user click vào button

```jsx
// html
<button onclick="handleClick()">
  Clicker
</button>

// jsx
<button onClick={handleClick}>
  Clicker
</button>
```

- Tất cả sự kiện đều nhận được một đối số là event, nó là một đối tượng có các thuộc tính và phương thức giúp xử lý sự kiện. Quan trọng nhất là event.target là một tham chiếu đến phần tử DOM mà sự kiện được gọi.

```jsx
const handleChange = (event) => {
  console.log(event.target.value);
};

return <input onChange={handleChange} />;
```

- Để truyền tham số vào cho các hàm xử lý sự kiện, ta có thể sử dụng arrow function

```jsx
const showMessage = (message) => {
  alert(message);
};

return <button onClick={() => showMessage("Hello BC42")}>Show Message</button>;
```

- Tổng hợp những sự kiện được hỗ trợ trong react: https://reactjs.org/docs/events.html

## 8. Style

- Inline style: Với React, inline style không được thể hiện bằng một string mà bằng một object. Các thuộc tính CSS được đặt tên bằng camelCase

```jsx
<h1 style={{ backgroundColor: "red", color: "white" }}>Hello</h1>
```

- CSS: Import trực tiếp file css vào Component, tuy nhiên dù bạn chỉ import ở 1 component nhưng css được import sẽ được áp dụng lên toàn bộ ứng dụng.

```jsx
import "./styles.css";
```

- CSS module:
  - CSS Module là một phương pháp để tạo ra các class với phạm vi cục bộ, giúp tránh xung đột và tăng tính tổ chức của mã CSS.
  - Với CSS Module, các class được tạo ra chỉ có tác dụng trong phạm vi của component mà chúng được sử dụng.
  - Khi sử dụng CSS Module, các class được đặt tên tự động và duy nhất, để tránh xung đột với các lớp CSS khác trong ứng dụng của bạn.

```jsx
import styles from "./styles.module.css";

<h1 className={styles.title}>Hello</h1>;
```

## 9. State

- Một số nội dung trên màn hình sẽ cập nhật theo tương tác của người dùng. Ví dụ như khi người dùng click vào button "Show" sẽ hiển thị nội dung ẩn, khi click vào button "Buy" sẽ đưa sản phẩm vào giỏ hàng,...Component cần lưu trữ trạng thái của nó để biết được nội dung hiển thị là gì, sản phẩm nào đã được thêm vào giỏ hàng. Trong React dữ liệu để lưu trữ trạng thái của component được gọi là State.

##### Khai báo một biến bình thường trong component là không đủ

- Component trên dưới thị một giá trị count, nhấn vào nút Increment sẽ hiển thị giá trị mới của count bằng cách tăng lên một đơn vị. Tuy nhiên có 2 điều ngăn không cho điều này hoạt động:
  - Các biến cục bộ không được chia sẻ giữa các lần render, nghĩa là mỗi lần render, biến count sẽ được khởi tạo lại về giá trị 0.
  - Các thay đổi đối với biến cục bộ sẽ không kích hoạt render, nghĩa là khi nhấn vào nút Increment, giá trị của count sẽ được tăng lên một đơn vị nhưng không có gì thay đổi trên giao diện.

```jsx
function Counter() {
  let count = 0;
  const handleIncrement = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

##### Để cập nhật một component với dữ liệu mới, hai điều cần phải xảy ra:

- Dữ liệu được giữ lại giữa các lần render.
- Kích hoạt để component được render lại với dữ liệu mới (re-rendering)

##### Hook `useState`

- `useState` là một React Hook cung cấp cho chúng ta hai điều trên:

  - Một biến trạng thái (state) để giữ lại dữ liệu giữa các lần render.
  - Một hàm setter để cập nhật giá trị của state và kích hoạt render lại component.

- Cú pháp: `const [count, setCount] = useState(0)`. useState nhận vào một tham số là giá trị khởi tạo của state, và trả về một mảng gồm 2 phần tử: giá trị của state và hàm setter để cập nhật giá trị của state. Cú pháp [count, setCount] được gọi là array destructuring, cho phép đọc giá trị của mảng theo thứ tự.

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

- Một số quy tắc khi sử dụng hooks:
  - Chỉ gọi hooks từ React function component. Không được gọi hooks từ các hàm bình thường.
  - Chỉ gọi hooks ở cấp độ cao nhất của component. Không được gọi hooks trong các vòng lặp, các hàm con hay các hàm xử lý sự kiện.

## 10. Props

- Các component trong React sử dụng props để giao tiếp với nhau.
- Props là một đối tượng (object) chứa các thuộc tính (properties) được truyền từ một component cha (parent component) đến một component con (child component). Các props này có thể là bất kỳ giá trị nào, từ kiểu dữ liệu đơn giản như chuỗi (string) hoặc số (number), cho đến các đối tượng phức tạp hơn.

```jsx
// Truyền props cho component con
function App() {
  return <Welcome name="John" age={30} />;
}

// Nhận props trong component con
function Welcome(props) {
  return (
    <div>
      My name is {props.name} and I am {props.age} years old.
    </div>
  );
}
```

- Ngoài ra bởi vì props là một object, nên ta có thể sử dụng object destructuring để lấy các thuộc tính cần thiết

```jsx
function Welcome({ name, age }) {
  return (
    <div>
      My name is {name} and I am {age} years old.
    </div>
  );
}
```

- Trong React, bạn có thể truyền một hàm (function) làm prop cho một component. Khi một component nhận được một hàm làm prop, nó có thể gọi hàm đó và truyền các tham số vào để thực hiện các hành động cụ thể.

  - Giúp gọi tới hàm xử lý của component cha khi một sự kiện xảy ra trong component con.
  - Giúp truyền dữ liệu từ component con lên component cha.

```jsx
// Truyền hàm xử lý sự kiện cho component con
function App() {
  const handleShowMessage = (message) => {
    alert(message);
  };
  return <Welcome onShowMessage={handleShowMessage} />;
}

// Nhận hàm xử lý sự kiện trong component con
function Welcome({ onShowMessage }) {
  const handleClick = () => {
    onShowMessage("Hello");
  };
  return <button onClick={handleClick}>Show message</button>;
}
```

- Trong React, prop children là một prop đặc biệt cho phép truyền các thành phần (components) hoặc các phần tử (elements) làm con của một component.

```jsx
function ParentComponent() {
  return (
    <ChildComponent>
      <h1>Hello</h1>
      <p>This is a child component.</p>
    </ChildComponent>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      {props.children}
    </div>
  );
}
```

- Một số lưu ý:
  - Props là chỉ đọc (read-only), không thể thay đổi giá trị của props trong component con.
  - Nếu một component nhận được một prop không được truyền vào, giá trị của prop đó sẽ là undefined. Để tránh việc này, ta có thể khai báo giá trị mặc định cho prop bằng cách sử dụng cú pháp sau: `function Welcome({ name = "John" })`

### State vs Props

| State                                                              | Props                                                                      |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| State được sử dụng để lưu trữ và quản lý trạng thái của component. | Props được sử dụng để truyền dữ liệu giữa các component                    |
| State được tạo và quản lý bởi component thông qua hook `useState`  | Props được truyền vào component thông qua thuộc tính                       |
| State chỉ có thể được thay đổi bởi component tạo ra nó             | Props là chỉ đọc, không thể thay đổi giá trị của props trong component con |
| State thay đổi sẽ gây ra việc render lại component                 | Props thay đổi sẽ gây ra việc render lại component                         |

### Re-rendering

- Một component sẽ kích hoạt việc hiển thị lại (re-render) khi:

  - Khi state của component thay đổi bằng cách gọi hàm setter được trả về từ hook useState.
  - Khi props của component thay đổi do component cha truyền vào giá trị mới.
  - Khi component cha re-render, tất cả các component con cũng sẽ re-render, bất kể props của chúng có thay đổi hay không.

## 11. Effect Hook

- Hook useEffect trong React là một cơ chế để thực hiện các side effect (tác động phụ) trong các component. Các side effect có thể bao gồm việc tương tác với các API bên ngoài, thay đổi DOM,...
- Cú pháp: `useEffect(setup, dependencies?)`

  - setup: một hàm mà bạn muốn thực thi mỗi khi hook useEffect chạy.
  - dependencies?: một mảng phụ thuộc để chỉ định khi nào hook useEffect chạy lại.

- Vòng đời của một component trong React:

  - MOUNTING: component được thêm vào DOM.
  - UPDATING: component được nhận được props mới hoặc state thay đổi.
  - UNMOUNTING: component bị hủy khỏi DOM.

- Đặt logic xử lý của bạn (side-effect) vào hàm setup, sau đó sử dụng đối số phụ thuộc (dependencies) cho phép bạn nắm bắt các sự kiện vòng đời để kiểm soát thời điểm bạn muốn logic xử lý được chạy. Đó là mục đích duy nhất của useEffect().

!["use effect"](https://dmitripavlutin.com/85fa02ee6610f1e08b247ef2f967139c/react-useeffect-hook.svg)

- `useEffect(setup, [])` với phụ thuộc là một mảng rỗng, thì useEffect sẽ chỉ thực thi hàm `setup` một lần duy nhất sau khi component render lần đầu. Thường được sử dụng để thực hiện các tác vụ khởi tạo như lấy dữ liệu từ API, thiết lập các sự kiện,...

```jsx
function MyComponent() {
  // Khai báo biến trạng thái cho dữ liệu được lấy từ API
  const [data, setData] = useState([]);

  // Định nghĩa hàm fetchData để gọi API
  async function fetchData() {
    // Gọi API
    const response = await axios.get(`https://example.com/api`);
    // Cập nhật biến trạng thái data với dữ liệu mới
    setData(response.data);
  }

  // Sử dụng hook useEffect để gọi hàm fetchData khi component được khởi tạo
  useEffect(() => {
    // Gọi hàm fetchData
    fetchData();
  }, []); // Truyền một mảng rỗng vào tham số thứ hai để chỉ chạy hook useEffect một lần khi component được khởi tạo

  // Hiển thị giao diện cho component
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

- `useEffect(setup, [prop, state])` với phụ thuộc là một mảng chứa nhiều giá trị, thì useEffect sẽ thực thi hàm `setup` sau khi component render lần đầu và sau các lần render tiếp theo nếu một trong các giá trị trong mảng thay đổi. Thường được sử dụng để đọc giá trị mới nhất của state hoặc prop và thực hiện các tác vụ phụ thuộc vào giá trị đó.

  - Ví dụ: khi giá trị của state searchTerm thay đổi, ta cần lấy dữ liệu mới từ API.

  ```jsx
  function MyComponent() {
    // Khai báo biến trạng thái cho giá trị searchTerm
    const [searchTerm, setSearchTerm] = useState("");

    // Khai báo biến trạng thái cho dữ liệu được lấy từ API
    const [data, setData] = useState([]);

    // Định nghĩa hàm fetchData để gọi API với giá trị searchTerm
    async function fetchData() {
      // Gọi API với giá trị searchTerm
      const response = await axios.get(
        `https://example.com/api?search=${searchTerm}`
      );
      // Cập nhật biến trạng thái data với dữ liệu mới
      setData(response.data);
    }

    // Sử dụng hook useEffect để gọi hàm fetchData khi giá trị searchTerm thay đổi
    useEffect(() => {
      // Gọi hàm fetchData
      fetchData();
    }, [searchTerm]); // Truyền searchTerm vào mảng phụ thuộc để chỉ chạy hook useEffect khi searchTerm thay đổi

    // Hiển thị giao diện cho component
    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  ```

  - Ví dụ: khi giá trị của prop thay đổi, ta cần set lại giá trị của state.

  ```jsx
  function MyComponent({ name }) {
    // Khai báo biến trạng thái cho giá trị chào
    const [greeting, setGreeting] = useState("");

    // Sử dụng hook useEffect để thiết lập lại giá trị chào khi prop name thay đổi
    useEffect(() => {
      // Gọi hàm setGreeting để cập nhật giá trị chào theo prop name
      setGreeting(`Hello, ${name}!`);
    }, [name]); // Truyền prop name vào mảng phụ thuộc để chỉ chạy hook useEffect khi prop name thay đổi

    // Hiển thị giá trị chào trong component
    return <div>{greeting}</div>;
  }
  ```

- `useEffect(setup)` với mảng phụ thuộc không dược khai báo, thì useEffect sẽ thực thi hàm `setup` mỗi khi component render. Điều này có thể gây ra các vấn đề về hiệu suất hoặc vòng lặp vô hạn nếu bạn không cẩn thận. Vì vậy, bạn nên truyền một mảng phụ thuộc là array rỗng hoặc array chứa các giá trị mà bạn muốn hook useEffect chạy lại khi chúng thay đổi.

#### Side-effect cleanup

- Nếu hàm setup của useEffect(setup, deps) return về một hàm, thì nó được coi là effect cleanup.

```jsx
useEffect(() => {
  // Your effect

  return () => {
    // Cleanup
  };
}, []);
```

- Effect cleanup hoạt động như sau:
  - Sau khi render lần đầu, useEffect() gọi hàm setup. Hàm cleanup không được gọi.
  - Trong các lần render tiếp theo, nếu mảng phụ thuộc bị thay đổi, trước khi gọi lại hàm setup thì useEffect sẽ gọi lại hàm cleanup của lần thực thi trước đó. Mục đích của hàm cleanup này là để giải phóng các tài nguyên được sử dụng trong hàm setup của useEffect trước đó.
  - Cuối cùng, trước khi component bị huỷ bỏ, useEffect gọi hàm cleanup của lần thực thi cuối cùng.

![react-useeffect-hook-cleanup](https://user-images.githubusercontent.com/45675930/228842487-99ea2e6b-30b7-4fe3-b0c4-5c8857c7986e.svg)

- Một số trường hợp sử dụng effect cleanup là: Remove event listeners, Clear timeouts
  , cancel API,...

## 12. Memoization

- Memoization là một kỹ thuật lưu trữ kết quả của một hàm để tránh việc tính toán lại nếu các đối số của hàm đó không thay đổi. Điều này giúp tăng hiệu suất của ứng dụng.
- Trong React, memoization được sử dụng để lưu trữ kết quả của một component để tránh việc render lại nếu các props của component đó không thay đổi.

```jsx
function MyComponent(props) {
  /* render using props */
}

export default React.memo(MyComponent);
```

- React.memo() sẽ so sánh giá trị của các props trước và sau khi component được render. Nếu giá trị của các props không thay đổi, thì React sẽ không render lại component. Nếu giá trị của các props thay đổi, thì React sẽ render lại component.

## 13. Refs

- Refs là cơ chế để React có thể truy cập vào các phần tử DOM trong component.
- Refs là một object có thuộc tính current. Refs được sử dụng để lưu trữ giá trị của một phần tử DOM. Refs được sử dụng để tham chiếu đến các phần tử DOM trong component.

```jsx
function MyComponent() {
  // Khai báo một ref
  const inputRef = useRef();

  useEffect(() => {
    // Sử dụng ref để thao tác với DOM.
    inputRef.current.focus();
  }, []);

  // Sử dụng ref để tham chiếu đến phần tử DOM
  return <input type="text" ref={inputRef} />;
}
```

- Ngoài ra, refs còn được sử dụng để lưu trữ giá trị của một biến trong component.
- Điểm khác biệt so với state là refs không gây ra việc render lại component khi giá trị của biến thay đổi.

```jsx
function MyComponent() {
  // Khai báo một ref
  const countRef = useRef(0);
  // Khai báo một state
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => countRef.current++}>
        Ref: {countRef.current}
      </button>
      <button onClick={() => setCount(count + 1)}>State: {count}</button>
    </div>
  );
}
```

## 14. useReducer

- useReducer là một hook cung cấp một cách khác để quản lý state trong component. useReducer thường được sử dụng khi state của component phức tạp và có nhiều giá trị phụ thuộc lẫn nhau.
- useReducer nhận vào một reducer function và giá trị khởi tạo của state. Reducer function nhận vào state và action, và trả về state mới.
- useReducer trả về một mảng gồm state và dispatch function. Dispatch function được sử dụng để gửi action đến reducer function. Action là một object có thuộc tính type. Reducer function sẽ xử lý action dựa vào thuộc tính type của action.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

## 15. useMemo

- useMemo là một hook cung cấp một cách để tối ưu hiệu suất của ứng dụng. useMemo sẽ lưu trữ kết quả của một hàm để tránh việc tính toán lại nếu các đối số của hàm đó không thay đổi.
- useMemo nhận vào một hàm và một mảng phụ thuộc. useMemo sẽ so sánh giá trị của các phần tử trong mảng phụ thuộc trước và sau khi component được render. Nếu giá trị của các phần tử không thay đổi, thì useMemo sẽ trả về kết quả của lần thực thi trước đó. Nếu giá trị của các phần tử thay đổi, thì useMemo sẽ tính toán lại kết quả của hàm và trả về kết quả mới.
- Thông thường, ta không cần sử dụng useMemo trong các trường hợp đơn giản. useMemo được sử dụng khi việc tính toán kết quả của hàm rất tốn kém và có thể gây ra hiện tượng lag trong ứng dụng.

```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  // Tính toán kết quả của hàm mỗi khi component được render
  const expensiveResult = expensiveFunction(count);

  // Lưu trữ kết quả của hàm để tránh việc tính toán lại nếu các đối số không thay đổi
  const expensiveResult = useMemo(() => expensiveFunction(count), [count]);

  return <div>{expensiveResult}</div>;
}
```

## 16. useCallback

- useCallback là một hook cung cấp một cách để tối ưu hiệu suất của ứng dụng. useCallback sẽ lưu trữ một hàm để tránh việc tạo ra một hàm mới mỗi khi component được render.
- useCallback nhận vào một hàm và một mảng phụ thuộc. useCallback sẽ so sánh giá trị của các phần tử trong mảng phụ thuộc trước và sau khi component được render. Nếu giá trị của các phần tử không thay đổi, thì useCallback sẽ trả về hàm trước đó. Nếu giá trị của các phần tử thay đổi, thì useCallback sẽ tạo ra một hàm mới và trả về hàm mới.
- Thông thường, ta không cần sử dụng useCallback trong các trường hợp đơn giản. useCallback được sử dụng khi việc tạo ra một hàm mới mỗi khi component được render rất tốn kém và có thể gây ra hiện tượng lag trong ứng dụng.

```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  // Tạo ra một hàm mới mỗi khi component được render
  const handleClick = () => setCount(count + 1);

  // Lưu trữ hàm để tránh việc tạo ra một hàm mới nếu các đối số không thay đổi
  const handleClick = useCallback(() => setCount(count + 1), [count]);

  return <button onClick={handleClick}>Click me</button>;
}
```

## 17. Custom hooks

- Custom hooks là những hooks mà bạn tự tạo ra để thực hiện một chức năng riêng biệt. Chúng giúp bạn chia sẻ logic giữa các components và tách code logic ra khỏi UI.
- Custom hooks thực chất là các hàm bắt đầu bằng từ khóa `use` và có thể gọi đến các hooks khác (Các hooks mặc định của React như useState, useEffect, useRef,... hoặc các custom hooks của bạn).
- Một custom hook cho phép nhận vào các đối số và trả về các giá trị. Nó có thể được sử dụng trong các components khác nhau.

```jsx
function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      Count: {count}
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}
```

## 18. Redux

- Redux là một thư viện quản lý state cho các ứng dụng javascript. Trong React khi ứng dụng có nhiều components, việc truyền dữ liệu từ cha xuống con và ngược lại rất phức tạp (props drilling). Redux giúp giải quyết vấn đề này bằng cách tạo ra một store chứa state của ứng dụng, và các components có thể truy cập đến store để lấy state và gửi yêu cầu đến store để thay đổi state. Store lúc này là nguồn dữ liệu duy nhất của ứng dụng.

- Redux gồm 3 thành phần chính:

  - Store: Là nơi quản lý state của ứng dụng.
  - Action: Một object chứa thông tin cho biết cần phải làm gì với store, ví dụ như thêm sản phẩm, xóa sản phẩm,... Action được gửi đến store bằng phương thức `dispatch`.
  - Reducer: Là các hàm thực thi các thay đổi state (trong store) dựa theo các thông tin trong action. Reducer nhận hai tham số là state hiện tại và action, và trả về một state mới.

![Redux](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

- Để sử dụng Redux trong React, ta cần cài đặt các thư viện sau:

  - `@reduxjs/toolkit` cung cấp các hàm để tạo ra store, reducer, action.
  - `react-redux` cung cấp các hooks để kết nối store với các components.

- Cấu hình redux store:

```jsx
// store.js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer });

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default store;
```

- Kết nối redux store với react component:

```jsx
// index.js
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

- Sử dụng các hooks useSelector và useDispatch trong component để lấy state và dispatch action:

```jsx
// Counter.jsx
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
}
```

### Cách tổ chức code trong Redux

- Trong Redux, chia file là một phần quan trọng trong việc tổ chức code. Bạn có thể chia các thành phần của Redux thành các file riêng biệt để giữ cho code dễ đọc và dễ bảo trì hơn. Dưới đây là một số cách chia file trong Redux:

  - Reducers: Mỗi reducer quản lý một phần của state và cập nhật nó dựa trên loại action và thông tin được đưa ra. Để giữ cho code được tổ chức tốt, bạn có thể chia các reducers thành các file riêng biệt, mỗi file quản lý một phần của state. Ví dụ: nếu bạn có một ứng dụng quản lý các task, bạn có thể chia reducers thành file taskReducer.js để quản lý trạng thái của các task, file userReducer.js để quản lý trạng thái của người dùng.
  - Action Creators: Một quy ước phổ biến khác là thay vì tạo các object ở những nơi bạn dispatch các actions, bạn nên viết các hàm tạo ra các action đó. Mỗi hàm này được gọi là action creator. Ví dụ: nếu bạn có một ứng dụng quản lý các task, bạn có thể chia các action creator thành file taskActions.js để quản lý các action liên quan đến task, và file userActions.js để quản lý các action liên quan đến người dùng.

  ```jsx
  // taskActions.js
  export function addTodo(text) {
    return {
      type: "ADD_TODO",
      payload: text,
    };
  }

  // AddTodo.jsx
  import { addTodo } from "./taskActions";
  dispatch(addTodo("Use Redux"));
  ```

  - Action types: Một quy ước khác là đặt tên cho các action types. Điều này giúp bạn tránh các lỗi khi gõ tên action type. Ví dụ: nếu bạn có một ứng dụng quản lý các task, bạn có thể chia các action types thành file taskContants.js để quản lý các action types liên quan đến task, và file userContants.js để quản lý các action types liên quan đến người dùng.

  ```jsx
  // taskContants.js
  export const ADD_TODO = "ADD_TODO";
  export const REMOVE_TODO = "REMOVE_TODO";

  // taskActions.js
  import { ADD_TODO, REMOVE_TODO } from "./taskContants";

  export function addTodo(text) {
    return {
      type: ADD_TODO,
      payload: text,
    };
  }
  ```

## 18. Redux middleware

- Redux middleware là một lớp trung gian giữa việc dispatch một action và khi action đó được xử lý bởi reducer trong Redux. Middleware cho phép bạn mở rộng hoặc thay đổi hành vi của Redux trong quá trình xử lý action. Mỗi middleware được thiết kế để chỉnh sửa hoặc trung gian giữa các action đi qua nó, như vậy, middleware cho phép bạn thực hiện các chức năng bổ sung, chẳng hạn như ghi log hoặc thực hiện các xử lý bất đồng bộ, mà không làm thay đổi trực tiếp hành vi của Redux.

- Tự tạo một middleware:

```jsx
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action: ", action);
  console.log("Previous state: ", store.getState());
  next(action);
  console.log("Next state: ", store.getState());
};

// store.js
import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "./middleware/loggerMiddleware";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  // Mặc định Redux Toolkit sẽ thêm một số middleware vào store, để thêm middleware vào store, ta sử dụng cú pháp sau:
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
```

- Trường hợp phổ biến nhất để sử dụng middleware là khi bạn muốn thực hiện các xử lý bất đồng bộ. Để thực hiện điều này, bạn có thể sử dụng một trong những thư viện middleware sau: `redux-thunk`, `redux-saga`, `redux-observable`.

  - `redux-thunk`: Cho phép dispatch một function thay vì một object. Function này sẽ nhận vào hai tham số là dispatch và getState.

  ```jsx
  // userActions.js
  // Thay vì return về một object, ta return về một function, function này nhận vào hai tham số là dispatch và getState
  // Ta có thể thực hiện các xử lý bất đồng bộ trong function này, sau đó dispatch một action bình thường để cập nhật state
  export const getUser = () => (dispatch, getState) => {
    try {
      dispatch({ type: "GET_USER_PENDING" });
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: "GET_USER_FULLFILED", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_USER_REJECTED", payload: error });
    }
  };

  // userReducer.js
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USER_PENDING":
        return {
          ...state,
          loading: true,
        };
      case "GET_USER_FULLFILED":
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case "GET_USER_REJECTED":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  // User.jsx
  import { getUser } from "./action";

  function User() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
      dispatch(getUser());
    }, []);

    return (
      <div>
        {user.loading && <p>Loading...</p>}
        {user.error && <p>{user.error}</p>}
        {user.data && <p>{user.name}</p>}
      </div>
    );
  }
  ```

## 19. Redux toolkit

- Redux Toolkit là một thư viện cung cấp các công cụ và tiện ích hỗ trợ việc sử dụng Redux một cách hiệu quả. Redux Toolkit được thiết kế để giảm thiểu độ phức tạp và lặp lại trong việc viết Redux, nó bao gồm các hàm mà bạn có thể sử dụng để tạo các action, reducer, middleware, store, và các hàm khác mà bạn có thể sử dụng để tối ưu hóa việc viết mã của bạn.

- Tạo store khi chưa sử dụng Redux toolkit:

```jsx
// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import taskReducer from "./reducers/taskReducer";

const rootReducer = combineReducers({
  user: userReducer,
  task: taskReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
```

- Tạo store khi đã sử dụng Redux toolkit:

```jsx
// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import taskReducer from "./reducers/taskReducer";

// Mặc định redux hỗ trợ sẵn redux-devtools, redux-thunk nên không cần setup gì thêm.
const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});
```

- Hàm createSlice: là một hàm để tạo reducers và actions một cách đơn giản và hiệu quả.

```jsx
// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khi sử dụng createSlice, bạn chỉ cần truyền vào một object bao gồm các thuộc tính:
// - name: tên của reducer
// - initialState: các giá trị khởi tạo ban đầu
// - reducers: các hàm reducers để xử lý các action tương ứng. createSlice sẽ tự động sinh ra các actions tương ứng và các reducers cho từng action đó.
const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;
```

- Hàm createAsyncThunk: là một hàm để tạo ra các action bất đồng bộ một cách đơn giản và hiệu quả.

```jsx
// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Khi sử dụng createAsyncThunk, bạn cần truyền vào 2 tham số:
// - name: tên của action
// - payloadCreator: hàm để thực hiện các xử lý bất đồng bộ

// Khi sử dụng createAsyncThunk, nó sẽ tự động sinh ra 3 action tương ứng:
// - pending: action này sẽ được dispatch khi hàm payloadCreator được gọi
// - fulfilled: action này sẽ được dispatch khi hàm payloadCreator được thực thi thành công và return về một giá trị
// - rejected: action này sẽ được dispatch khi hàm payloadCreator được thực thi thất bại và throw ra một lỗi
export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Để sử dụng các action được sinh ra bởi createAsyncThunk, ta chỉ cần truyền vào thuộc tính extraReducers của createSlice
// Trong thuộc tính extraReducers, ta sẽ truyền vào một object builder, trong đó ta sẽ sử dụng các hàm addCase để xử lý các action được sinh ra bởi createAsyncThunk
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
```
