// _app.jsx
import './index.scss'; // 引入全局样式
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
