import{FreshContext, Handlers, PageProps} from "$fresh/server.ts";

const Page = (props: PageProps<{added?: boolean}>) => {
  return(
    <body>
    <div class = "layout">
      <div class = "header">
        <a href = "/agendacsr">Agenda Client Side</a>
        <a href = "/agendassr">Agenda Server Side</a>
      </div>
      <h1>My Agenda</h1>
      <div>
        <p>Welcome to my agenda!</p>
      </div>
    </div>
    </body>
  );
};
export default Page;
