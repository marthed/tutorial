//js/app.js
function RenderTest(){ console.log("sub-component render test"); return false; }
function App(props){     
   return  ( 
        <div>
             <SidebarPresenter  />
             <SummaryPresenter  />
             <RenderTest />
         </div>  
    );
}
