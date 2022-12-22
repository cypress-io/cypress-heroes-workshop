"use strict";(self.webpackChunkguide_generator=self.webpackChunkguide_generator||[]).push([[567],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=o.createContext({}),r=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=r(t.components);return o.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=r(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return n?o.createElement(h,i(i({ref:e},c),{},{components:n})):o.createElement(h,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var r=2;r<s;r++)i[r]=n[r];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5687:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var o=n(7462),a=(n(7294),n(3905));const s={},i="Lab2 - Component Testing (Part 1)",l={unversionedId:"lab2",id:"lab2",title:"Lab2 - Component Testing (Part 1)",description:"We will start our component testing journey in this lab by testing a relatively",source:"@site/docs/lab2.md",sourceDirName:".",slug:"/lab2",permalink:"/cypress-heroes-workshop/lab2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab1 - E2E Testing",permalink:"/cypress-heroes-workshop/lab1"},next:{title:"Lab3 - Component Testing (Part 2)",permalink:"/cypress-heroes-workshop/lab3"}},p={},r=[{value:"Getting Started",id:"getting-started",level:2},{value:"Launch &amp; Configure Cypress",id:"launch--configure-cypress",level:2},{value:"Framework Detection",id:"framework-detection",level:4},{value:"Install Dev Dependencies",id:"install-dev-dependencies",level:4},{value:"Configuration Files",id:"configuration-files",level:4},{value:"Choose a Browser",id:"choose-a-browser",level:4},{value:"Test Runner",id:"test-runner",level:4},{value:"Button Component Test",id:"button-component-test",level:2},{value:"Create Spec File",id:"create-spec-file",level:3},{value:"Your First Test",id:"your-first-test",level:3},{value:"Using a Wrapper Component",id:"using-a-wrapper-component",level:3},{value:"Using Template Syntax in cy.mount",id:"using-template-syntax-in-cymount",level:3},{value:"Testing Button with an @Input",id:"testing-button-with-an-input",level:2},{value:"Testing Focus using Component Syntax",id:"testing-focus-using-component-syntax",level:4},{value:"Testing Focus using Template Syntax",id:"testing-focus-using-template-syntax",level:4},{value:"Testing an Emitted Event",id:"testing-an-emitted-event",level:2},{value:"Testing onClick using Component Syntax",id:"testing-onclick-using-component-syntax",level:4},{value:"Testing onClick using Template Syntax",id:"testing-onclick-using-template-syntax",level:4},{value:"Using createOutputSpy to Mock Emitters",id:"using-createoutputspy-to-mock-emitters",level:2}],c={toc:r};function u(t){let{components:e,...s}=t;return(0,a.kt)("wrapper",(0,o.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab2---component-testing-part-1"},"Lab2 - Component Testing (Part 1)"),(0,a.kt)("p",null,"We will start our component testing journey in this lab by testing a relatively\nsimple component. The Cypress Heroes app has a button component that would be a\ngreat example, so let's write some tests around that."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cypress Heroes Button",src:n(9616).Z,width:"94",height:"56"})),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started, make sure your current branch is clean, and then checkout the\n",(0,a.kt)("inlineCode",{parentName:"p"},"lab2-start")," branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout lab2-start\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can find a completed version of this lab in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cypress-io/cypress-heroes-workshop/tree/lab2-complete"},"lab2-complete"),"\nbranch.")),(0,a.kt)("p",null,"If the app is not currently running, start it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='./client'",title:"'./client'"},"npm run start\n")),(0,a.kt)("h2",{id:"launch--configure-cypress"},"Launch & Configure Cypress"),(0,a.kt)("p",null,"The project has Cypress installed, though it is not yet set up. When you launch\nthe app for the first time in a new project Cypress will guide you through a\nconfiguration wizard to get you up and running quickly."),(0,a.kt)("p",null,"To start, go into the ",(0,a.kt)("strong",{parentName:"p"},"client")," folder and open Cypress:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client",title:"./client"},"npx cypress open\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Choose CT",src:n(9599).Z,width:"1202",height:"729"})),(0,a.kt)("p",null,"When Cypress launches, choose component testing."),(0,a.kt)("h4",{id:"framework-detection"},"Framework Detection"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CT Angular Detection",src:n(9966).Z,width:"1202",height:"613"})),(0,a.kt)("p",null,"Cypress will automatically detect Angular as the framework and set up the\nconfiguration."),(0,a.kt)("p",null,'Click "Next Step"'),(0,a.kt)("h4",{id:"install-dev-dependencies"},"Install Dev Dependencies"),(0,a.kt)("p",null,'On the "Install Dev Dependencies" screen, you should have already installed all\nthe required dependencies, but if they weren\'t, this screen would let you know\nwhat you need. Scroll to the bottom and click "Continue".'),(0,a.kt)("h4",{id:"configuration-files"},"Configuration Files"),(0,a.kt)("p",null,'The next screen shows all the files generated and added to your project. Scroll\ndown and click "Continue".'),(0,a.kt)("h4",{id:"choose-a-browser"},"Choose a Browser"),(0,a.kt)("p",null,"Now your project is set up. To launch the test runner, select which browser you\nwould like to use for testing and click the start button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Choose Browser",src:n(7894).Z,width:"1202",height:"615"})),(0,a.kt)("h4",{id:"test-runner"},"Test Runner"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"No specs found",src:n(5323).Z,width:"1794",height:"752"})),(0,a.kt)("p",null,"The spec list will show any files that match the default spec pattern of\n",(0,a.kt)("strong",{parentName:"p"},"*","*","/","*",".cy.ts"),". Our project doesn't have any tests yet, so we get a \"No Specs\nFound\" message. Let's hop into our code editor and create one."),(0,a.kt)("h2",{id:"button-component-test"},"Button Component Test"),(0,a.kt)("h3",{id:"create-spec-file"},"Create Spec File"),(0,a.kt)("p",null,"Create a new file named ",(0,a.kt)("strong",{parentName:"p"},"button.component.cy.ts")," in the same directory that\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"ButtonComponent")," currently exists (./client/src/app/components/button). We\nrecommend you co-locate your component tests directly next to your component\nsource."),(0,a.kt)("h3",{id:"your-first-test"},"Your First Test"),(0,a.kt)("p",null,"In the spec file, add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/button/button.component.cy.ts",title:"./client/src/app/components/button/button.component.cy.ts"},"import { ButtonComponent } from './button.component';\n\ndescribe('ButtonComponent', () => {\n  it('should mount', () => {\n    cy.mount(ButtonComponent);\n  });\n});\n")),(0,a.kt)("p",null,"Go back to the test runner and see that the new spec file has shown up in the\nspec list. Click the spec, and the test will execute:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"First Button Mount Test",src:n(8818).Z,width:"3588",height:"1916"})),(0,a.kt)("p",null,"The component mounts but looks off because there is no label for the button. In\na template, we pass the label to the button by including the text inside of the\nbutton's tag like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<app-button>Click me</app-button>\n")),(0,a.kt)("h3",{id:"using-a-wrapper-component"},"Using a Wrapper Component"),(0,a.kt)("p",null,"One way to pass the text in a component test is to create a wrapper component\nand then mount the wrapper instead. Let's create a second test that uses this\ntechnique and verify the button has the proper label. Add the following inside\nof the ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," block below the first test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/button/button.component.cy.ts",title:"./client/src/app/components/button/button.component.cy.ts"},"it('should have custom text', () => {\n  @Component({\n    template: '<app-button>Click me</app-button>',\n  })\n  class ButtonWrapper {}\n\n  cy.mount(ButtonWrapper, {\n    declarations: [ButtonComponent],\n  });\n  cy.get('button').should('have.text', 'Click me');\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@Component")," is imported from '@angular/core'")),(0,a.kt)("p",null,"Now our button looks like it should, and the test also passes:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Second Button Mount Test",src:n(4439).Z,width:"1792",height:"956"})),(0,a.kt)("h3",{id:"using-template-syntax-in-cymount"},"Using Template Syntax in cy.mount"),(0,a.kt)("p",null,"Creating a wrapper component could become tedious, but fortunately, another\nmethod is at your disposal."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cy.mount")," command can also accept a template string as its first parameter.\nYou could also write the test above as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/button/button.component.cy.ts",title:"./client/src/app/components/button/button.component.cy.ts"},"it('should have custom text', () => {\n  cy.mount(`<app-button>Click me</app-button>`, {\n    declarations: [ButtonComponent],\n  });\n  cy.get('button').should('have.text', 'Click me');\n});\n")),(0,a.kt)("p",null,"We must supply our component as a declaration in the config object when using\nthe template syntax. In the next lab, we'll look at centralizing component setup\nand registration in a single place, so it doesn't have to happen in every test.\nBut for now, let's write some more tests for our button."),(0,a.kt)("h2",{id:"testing-button-with-an-input"},"Testing Button with an @Input"),(0,a.kt)("p",null,"The button component has several inputs that change its functionality. We'll\ntake a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"focus")," input, which has the button set to focus on itself if\nthe input is true."),(0,a.kt)("p",null,"Passing inputs to a component depends on whether you are passing in a component\nto the mount command or using the template syntax. We'll go over both approaches\nhere."),(0,a.kt)("h4",{id:"testing-focus-using-component-syntax"},"Testing Focus using Component Syntax"),(0,a.kt)("p",null,"When using component syntax, you pass in additional options to the component in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"componentOptions")," member of the config object like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/button/button.component.cy.ts",title:"./client/src/app/components/button/button.component.cy.ts"},"it('should be focused when focus input is true', () => {\n  cy.mount(ButtonComponent, {\n    componentProperties: {\n      focus: true,\n    },\n  });\n  cy.get('button').should('have.focus');\n});\n")),(0,a.kt)("p",null,"A nice benefit of using the component syntax is that ",(0,a.kt)("inlineCode",{parentName:"p"},"componentProperties")," will\nbe properly typed to the inputs/outputs of the passed-in component, so you will\nget type checking and code completion."),(0,a.kt)("h4",{id:"testing-focus-using-template-syntax"},"Testing Focus using Template Syntax"),(0,a.kt)("p",null,"When using template syntax, you would wire up the component as you would in a\ncomponent template, using Angular's binding syntax to attach variables and\nevents to the component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/button/button.component.cy.ts",title:"./client/src/app/components/button/button.component.cy.ts"},"it('should be focused when focus input is true', () => {\n  cy.mount(`<app-button [focus]=\"true\">Click me</app-button>`, {\n    declarations: [ButtonComponent],\n  });\n  cy.get('button').should('have.focus');\n});\n")),(0,a.kt)("h2",{id:"testing-an-emitted-event"},"Testing an Emitted Event"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ButtonComponent")," emits an ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," event when a user clicks it. Let's\nwrite a test to verify that the event does get raised when doing so."),(0,a.kt)("p",null,"To verify the ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," event is called, we'll use a\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/guides/stubs-spies-and-clocks"},"Cypress spy"),",\nwhich keeps track of method calls and lets us inspect those values."),(0,a.kt)("h4",{id:"testing-onclick-using-component-syntax"},"Testing onClick using Component Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/button/button.component.cy.ts",title:"./client/src/app/components/button/button.component.cy.ts"},"it('should respond to onClick event', () => {\n  cy.mount(ButtonComponent, {\n    componentProperties: {\n      onClick: {\n        emit: cy.spy().as('onClickSpy'),\n      } as any,\n    },\n  });\n  cy.get('button').click();\n  cy.get('@onClickSpy').should('have.been.called');\n});\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We cast the ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," emitter as ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," here, so we don't have to mock all the\nmethods an ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitter")," has. We'll see a better method for this in a moment.")),(0,a.kt)("h4",{id:"testing-onclick-using-template-syntax"},"Testing onClick using Template Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/button/button.component.cy.ts",title:"./client/src/app/components/button/button.component.cy.ts"},"it('should respond to onClick event', () => {\n  cy.mount('<app-button (click)=\"onClick.emit($event)\">Click me</app-button>', {\n    declarations: [ButtonComponent],\n    componentProperties: {\n      onClick: {\n        emit: cy.spy().as('onClickSpy'),\n      },\n    },\n  });\n  cy.get('button').click();\n  cy.get('@onClickSpy').should('have.been.called');\n});\n")),(0,a.kt)("h2",{id:"using-createoutputspy-to-mock-emitters"},"Using createOutputSpy to Mock Emitters"),(0,a.kt)("p",null,"In the previous tests, we mocked the ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," output by defining an object with\nan emitted event, which we assigned to a Cypress spy. In the component syntax\nexample, we also had to cast that mock as ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", which is always a code smell.\nWe know this wasn't ideal, so we created a helper function called\n",(0,a.kt)("inlineCode",{parentName:"p"},"createOutputSpy")," that mocks an event emitter for you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/button/button.component.cy.ts",title:"./client/src/app/components/button/button.component.cy.ts"},"it('should respond to onClick event', () => {\n  cy.mount('<app-button (click)=\"onClick.emit($event)\">Click me</app-button>', {\n    declarations: [ButtonComponent],\n    componentProperties: {\n      onClick: createOutputSpy('onClickSpy'),\n    },\n  });\n  cy.get('button').click();\n  cy.get('@onClickSpy').should('have.been.called');\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"createOutputSpy")," is imported from 'cypress/angular'")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createOutputSpy")," sets up a spy and creates an\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/core-concepts/variables-and-aliases"},"aliases"),"\nusing the string passed as a parameter to identify the alias."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We also have a method to automatically create spies for all outputs if you are\nusing the component syntax. See\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/component-testing/events-angular#Using-autoSpyOutputs"},"Using autoSpyOutputs"),"\nin the docs for more info.")))}u.isMDXComponent=!0},9966:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/ct-angular-detect-f9731c77db172cf5c346d2fbd18ef90e.jpg"},7894:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/ct-choose-browser-ebd5dade88061583cc00456608995637.jpg"},9616:(t,e,n)=>{n.d(e,{Z:()=>o});const o="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAXqADAAQAAAABAAAAOAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAOABeAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICBAICBAYEBAQGCAYGBgYICggICAgICgwKCgoKCgoMDAwMDAwMDA4ODg4ODhAQEBAQEhISEhISEhISEv/bAEMBAwMDBQQFCAQECBMNCw0TExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTE//dAAQABv/aAAwDAQACEQMRAD8A+/v2Z/2Z/wBnDXv2cPh/rmufD/w3e3t74b0qe4uJ9Ks5JZZZLOJnkkdoizOzElmJJJOTXtv/AAyl+y2Bk/Dbwr/4J7H/AOM0fso/8mufDb/sVdG/9Ioa9fWJdVkee6+aFWKxx/wnacFiO5J6Z6CrJbPGv+GWv2VP+ideE/8AwUWP/wAao/4Za/ZU/wCideE//BRY/wDxqvb/AOztO/594v8Avhf8KP7O0/8A594v++F/woJ5jxD/AIZa/ZU/6J14T/8ABRY//GqP+GWv2VP+ideE/wDwUWP/AMar2/8As7T/APn3i/74X/Cj+ztP/wCfeL/vhf8ACgOY8Q/4Za/ZU/6J14T/APBRY/8Axqj/AIZa/ZU/6J14T/8ABRY//Gq9v/s7T/8An3i/74X/AAo/s7T/APn3i/74X/CgOY8Q/wCGWv2VP+ideE//AAUWP/xqlH7LP7KpOB8OfCZ/7hFj/wDGq9u/s7T/APn3i/74X/CkOm6cwwbeL/vgf4UBzHi//DKP7Ln/AETXwr/4J7L/AOM1+W//AAVu+CfwZ+G37OGia58OvCOi6Bey+JLaB7jTbC3tZWiazvGMbPDGrFCyqSpOMqD2FftZbBrC8WzUkwzA7ATnYy8kAnsRyPTFflD/AMFov+TXNB/7Gq1/9Ib6gpM//9D9bP2Uf+TXPhr/ANito3/pFDXsWkf8eC/70n/obV47+yj/AMmufDX/ALFbRv8A0ihr2LSP+PBf96T/ANDar6GcjSrmtT8YeG9G8R6X4S1O6EWo615/2KEqxMv2ZA8uCAQNqkHkjPbNdLXyl8Yb+x039pH4U3eozx28SjXQXlcIozaR45Ygc04q5LPq4KzdBmjac4xzXwN4tTwD8T/2ltZ8J/GnV/L0LTtFsrrQbM372dpc+c0gu7oPFJGJZI2VUHzHYOcd68H0zxVceI9B8IeBvGfiO+b4bXni3V9Oj1eS5eF76ytY92nQTXgKuYZJd6CTcPMCAZq1TFzH6reJ9bj8LeHb7xJc21zdx2EDztBaRGaeQIu7bFGvLucYVR1NX9NuxqenW+pxxSRLcRpKElQpIocBtrqeVYZwQeh4r8lfFo8IeEfHvxX8MfCbXrm60rTvh1dzLbpfS3UNjdF2LJBIzuVONr4DEoWIBHQey+EfhvoPxf8AjtqGlePp72806z8IaBIlml3PDC00wmBmYROhZwB8pJ4JJ64wOnZXDmP0QIIODRXzN+yVqmr33wifTNZvJtQbRdY1XSoZ7lzJM1vZXckUPmOeWZUAXJ5OK+mahqzsNFC5/wCP+z/33/8ARbV+T/8AwWi/5Nc0H/sarX/0hvq/WC5/4/7P/ff/ANFtX5P/APBaL/k1zQf+xqtf/SG+pMuJ/9H9bP2Uf+TXPhr/ANito3/pFDXsWkf8eC/70n/obV45+yj/AMmufDb/ALFXRv8A0ihr1+GVNOlazuiERnZonPCkMc4z0yCTx3FWRI1q5Dxb8PvAXj6OCLxzolhrK2pYwi+t47gRlsBinmK23OBnHXFdX5sX99fzFL5sX98fmKNSTz/VvhF8Kdd0Oy8M634a0u707TeLS1mtIXhgHpEhXag9lArlvjD8PPEninwRa+G/h7/ZUUdnMjSaXqdok2m3lsoINtIgRmiHIZHjGVIHBGRXtPmxf3x+Yo82L++PzFNNoVj5N+Ef7P2oaR4n1bxf8RdN0KygvtLXRLbQtGhzp8Nn5jSzeb5kaea8zt83yBdoxzX05Y+HdA0u/fVdNsbe3upIY7d5o41V2hhz5cZYAEomTtXOFycVrebF/fH5ijzYv74/MUNtglYz9J0XRtBt3tNDtIbOKSWSd0gRY1aWVi8jkKACzsSWPUk5NadM82L++PzFNaaBRuZ1AHckUhlW5/4/7P8A33/9FtX5P/8ABaL/AJNc0H/sarX/ANIb6v1dgf8AtC9S5i5hgDYbszMMceoAzz6mvyi/4LRf8muaD/2NVr/6Q31DKif/0vv79mf9pj9nDQf2cPh/oeufEDw3ZXtl4b0qC4t59Vs45YpY7OJXjkRpQyurAhlIBBGDXtb/ALVX7LMilJPiR4VYHqDrFiR/6Or+Jc9aSqFY/tc/4aZ/ZI/6KB4Q/wDBrYf/AB2j/hpj9kj/AKKB4Q/8Gth/8dr+KOimFj+1z/hpj9kj/ooHhD/wa2H/AMdo/wCGmP2SP+igeEP/AAa2H/x2v4o6KAsf2uf8NMfskf8ARQPCH/g1sP8A47R/w0x+yR/0UDwh/wCDWw/+O1/FHRQFj+1z/hpj9kj/AKKB4Q/8Gth/8dpV/aa/ZJU7l+IPhAEemq2H/wAdr+KKigLH9tf/AA1b+y2OB8SfCv8A4OLH/wCPV+W//BW742fBn4k/s4aJofw68XaLr97F4ktp3t9Nv7e6lWJbO8UyMkMjMEDMoLEYywHcV/O5Tl60mFj/2Q=="},9599:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cypress-choose-screen-c48a14cbba21b56988490feab3082796.jpg"},8818:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/first-button-mount-ced9efe310f13ed2bd9f22487e422520.jpg"},5323:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/no-specs-found-9776c050caeb29e02a851405e7a3063c.jpg"},4439:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/second-button-mount-53004c2e37d65bb2ee3ef3df3f957d00.jpg"}}]);