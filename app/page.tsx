import Link from "next/link";

export default function Home() {
  return (
    <div style={{ margin: "100px" }} className="App">
      <h1>Hello React CNA!</h1>
      <p>나는 SSR 방식으로 렌더링이 되고 있어요!</p>
      <p>서버에서 렌더링이 되어 브라우저에 전달이 된답니다!</p>
      <p>따라서 초기 로딩 속도가 CSR보다 빠르겠지요?</p>
      <p>
        내용이 적용된 HTML 문서가 서버로부터 내려오기에 SEO 적용이 쉽습니다!
      </p>
      <p>
        js 파일을 받지 않아도 기본적인 마크업 구조와 css 스타일은 유지가 되지요!
      </p>
      <Link href="/hello">
        hello 페이지로 이동
      </Link>
    </div>
  )
}
