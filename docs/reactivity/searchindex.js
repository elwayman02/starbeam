Object.assign(window.search, {"doc_urls":["introduction/index.html#starbeam-reactivity","introduction/index.html#what-is-starbeam-reactivity","introduction/index.html#universal","introduction/index.html#harmonious","introduction/index.html#unidirectional","introduction/dataland.html#data-land","introduction/dataland.html#counter","introduction/computations.html#reactive-computations","introduction/teardown.html#structured-finalization","adapters/index.html#starbeam-in-your-app","adapters/react.html#using-starbeamreact-in-a-react-app","portable/index.html#using-starbeam-in-libraries","portable/examples/remote-data.html#example-remotedata","portable/examples/mini-db.html#example-minidb","digging-in.html#lets-dig-in","digging-in/reactive-subscription.html#reactivesubscription"],"index":{"documentStore":{"docInfo":{"0":{"body":16,"breadcrumbs":4,"title":2},"1":{"body":7,"breadcrumbs":4,"title":2},"10":{"body":0,"breadcrumbs":10,"title":4},"11":{"body":0,"breadcrumbs":6,"title":3},"12":{"body":0,"breadcrumbs":7,"title":2},"13":{"body":0,"breadcrumbs":7,"title":2},"14":{"body":0,"breadcrumbs":4,"title":2},"15":{"body":0,"breadcrumbs":4,"title":1},"2":{"body":39,"breadcrumbs":3,"title":1},"3":{"body":31,"breadcrumbs":3,"title":1},"4":{"body":1,"breadcrumbs":3,"title":1},"5":{"body":28,"breadcrumbs":6,"title":2},"6":{"body":14,"breadcrumbs":5,"title":1},"7":{"body":0,"breadcrumbs":6,"title":2},"8":{"body":0,"breadcrumbs":6,"title":2},"9":{"body":0,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"Starbeam Reactivity is a system for defining universal hooks: encapsulated parts of a reactive program that efficiently update and work harmoniously with any reactive framework.","breadcrumbs":"Starbeam Reactivity » Starbeam Reactivity","id":"0","title":"Starbeam Reactivity"},"1":{"body":"Data Land Reactive Values and Computations Structured Finalization","breadcrumbs":"Starbeam Reactivity » What is Starbeam Reactivity?","id":"1","title":"What is Starbeam Reactivity?"},"10":{"body":"","breadcrumbs":"Starbeam in Your App » Using @starbeam/react in a React App » Using @starbeam/react in a React App","id":"10","title":"Using @starbeam/react in a React App"},"11":{"body":"","breadcrumbs":"Using Starbeam in Libraries » Using Starbeam in Libraries","id":"11","title":"Using Starbeam in Libraries"},"12":{"body":"","breadcrumbs":"Using Starbeam in Libraries » Example: RemoteData » Example: RemoteData","id":"12","title":"Example: RemoteData"},"13":{"body":"","breadcrumbs":"Using Starbeam in Libraries » Example: MiniDB » Example: MiniDB","id":"13","title":"Example: MiniDB"},"14":{"body":"","breadcrumbs":"Let's Dig In » Let's Dig In","id":"14","title":"Let's Dig In"},"15":{"body":"","breadcrumbs":"Let's Dig In » ReactiveSubscription » ReactiveSubscription","id":"15","title":"ReactiveSubscription"},"2":{"body":"Starbeam is a write-once, adapt-anywhere library. When you write code using @starbeam/core APIs, you can adapt them to any reactive framework with the ReactiveSubscription API. Starbeam also comes with adapters for React (@starbeam/react), Vue (@starbeam/vue), Svelte (@starbeam/svelte) and Ember (@starbeam/glimmer). These adapters use the ReactiveSubscription API under the hood to expose idiomatic entry points for each framework.","breadcrumbs":"Starbeam Reactivity » Universal","id":"2","title":"Universal"},"3":{"body":"You can use Starbeam in a targeted part of an existing app without needing to change anything else. Starbeam hooks are self-contained, and interact with your framework in a clear, structured way. That said, when you use multiple Starbeam hooks in a single app, Starbeam coordinates with your framework to avoid duplicate work.","breadcrumbs":"Starbeam Reactivity » Harmonious","id":"3","title":"Harmonious"},"4":{"body":"Starbeam","breadcrumbs":"Starbeam Reactivity » Unidirectional","id":"4","title":"Unidirectional"},"5":{"body":"With Starbeam reactivity, you describe the states that can change, and computations based on those states automatically update. Data Coherence : When you change a state, all of the computations derived from that state immediately reflect the change. import { Cell, reactive } from \"@starbeam/core\"; const counter = reactive(0);","breadcrumbs":"Starbeam Reactivity » Data Land » Data Land","id":"5","title":"Data Land"},"6":{"body":"import { Cell } from \"@starbeam/core\"; const counter = Cell(0); function increment() { counter.current++;\n} counter.current; //? 0 increment(); counter.current; //? 1","breadcrumbs":"Starbeam Reactivity » Data Land » Counter","id":"6","title":"Counter"},"7":{"body":"","breadcrumbs":"Starbeam Reactivity » Reactive Computations » Reactive Computations","id":"7","title":"Reactive Computations"},"8":{"body":"","breadcrumbs":"Starbeam Reactivity » Structured Finalization » Structured Finalization","id":"8","title":"Structured Finalization"},"9":{"body":"","breadcrumbs":"Starbeam in Your App » Starbeam in Your App","id":"9","title":"Starbeam in Your App"}},"length":16,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"1":{"df":1,"docs":{"6":{"tf":1.0}}},"a":{"d":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"p":{"df":3,"docs":{"10":{"tf":1.0},"3":{"tf":1.4142135623730951},"9":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"(":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"5":{"tf":1.4142135623730951},"7":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"14":{"tf":1.0}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"c":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":1.0},"13":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}},"i":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"11":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"d":{"b":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.0},"2":{"tf":1.0}},"i":{"df":0,"docs":{},"v":{"df":5,"docs":{"0":{"tf":2.0},"1":{"tf":1.4142135623730951},"2":{"tf":1.0},"5":{"tf":1.4142135623730951},"7":{"tf":1.0}},"e":{"(":{"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"15":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"b":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"/":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":3,"docs":{"2":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.0},"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":8,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"11":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":2.0},"4":{"tf":1.0},"5":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":2.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}}}}},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":4,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"w":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"1":{"df":1,"docs":{"6":{"tf":1.0}}},"a":{"d":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"p":{"df":3,"docs":{"10":{"tf":2.0},"3":{"tf":1.4142135623730951},"9":{"tf":1.7320508075688772}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"(":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"5":{"tf":1.4142135623730951},"7":{"tf":1.7320508075688772}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.7320508075688772}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":3,"docs":{"1":{"tf":1.0},"5":{"tf":2.0},"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"g":{"df":2,"docs":{"14":{"tf":1.7320508075688772},"15":{"tf":1.0}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"c":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"13":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"8":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}},"i":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"d":{"df":3,"docs":{"1":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":2,"docs":{"14":{"tf":1.7320508075688772},"15":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":4,"docs":{"11":{"tf":1.7320508075688772},"12":{"tf":1.0},"13":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"d":{"b":{"df":1,"docs":{"13":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.7320508075688772},"2":{"tf":1.0}},"i":{"df":0,"docs":{},"v":{"df":9,"docs":{"0":{"tf":2.449489742783178},"1":{"tf":2.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":1.0},"7":{"tf":2.0},"8":{"tf":1.0}},"e":{"(":{"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"15":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"b":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"/":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":3,"docs":{"2":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.7320508075688772},"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":14,"docs":{"0":{"tf":2.0},"1":{"tf":1.7320508075688772},"10":{"tf":1.0},"11":{"tf":1.7320508075688772},"12":{"tf":1.0},"13":{"tf":1.0},"2":{"tf":1.7320508075688772},"3":{"tf":2.23606797749979},"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":2.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"8":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}}}},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":6,"docs":{"10":{"tf":1.7320508075688772},"11":{"tf":1.7320508075688772},"12":{"tf":1.0},"13":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"w":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":2,"docs":{"10":{"tf":1.0},"9":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":1.0},"13":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"d":{"b":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}},"i":{"df":0,"docs":{},"v":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"7":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"b":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"11":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"s":{"df":2,"docs":{"10":{"tf":1.0},"11":{"tf":1.0}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});