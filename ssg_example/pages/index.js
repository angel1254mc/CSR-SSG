import RainbowHeader from '../components/RainbowHeader'

export default function Home() {
  return (
    <div className="App">
      <RainbowHeader>Hello World</RainbowHeader>
      <div className="desc">This is the Home page of a NextJS project, boostrapped with <b>npx create-next-app</b>. NextJS uses a static-first approach, rendering the base html template on the server before serving it to the client. The interval that controls the Rainbow Header component above is sent to the client as part of the client-side JavaScript bundle</div>
    </div>
  )
}
