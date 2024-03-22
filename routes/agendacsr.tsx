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
        <div class ="agendaForm">
            <h2>Add new contact</h2>
            <input type="text" placeholder="Name" ></input>
            <input type="text" placeholder="Name" ></input>
            <button>Add contact</button>
        </div>
    </div>
    </body>
  );
};
export default Page;