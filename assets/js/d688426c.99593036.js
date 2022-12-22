"use strict";(self.webpackChunkguide_generator=self.webpackChunkguide_generator||[]).push([[134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?o.createElement(h,r(r({ref:t},m),{},{components:n})):o.createElement(h,r({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={},r="Lab3 - Component Testing (Part 2)",s={unversionedId:"lab3",id:"lab3",title:"Lab3 - Component Testing (Part 2)",description:"In the previous lab, you got a taste of the basics of component testing with",source:"@site/docs/lab3.md",sourceDirName:".",slug:"/lab3",permalink:"/cypress-heroes-workshop/lab3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab2 - Component Testing (Part 1)",permalink:"/cypress-heroes-workshop/lab2"},next:{title:"Lab4 - API Testing",permalink:"/cypress-heroes-workshop/lab4"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Create LoginForm Spec",id:"create-loginform-spec",level:2},{value:"Register Additional Modules and Declarations",id:"register-additional-modules-and-declarations",level:4},{value:"Using a Custom Mount Command",id:"using-a-custom-mount-command",level:2},{value:"Test Form Validation",id:"test-form-validation",level:2},{value:"Test Required Field Validation",id:"test-required-field-validation",level:4},{value:"Test Email Field Validation",id:"test-email-field-validation",level:4},{value:"Test Form is Not Submitted when Invalid",id:"test-form-is-not-submitted-when-invalid",level:4},{value:"Test Invalid Credentials",id:"test-invalid-credentials",level:2},{value:"Test Valid credentials",id:"test-valid-credentials",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab3---component-testing-part-2"},"Lab3 - Component Testing (Part 2)"),(0,a.kt)("p",null,"In the previous lab, you got a taste of the basics of component testing with\nCypress. In this lab, we will go a bit deeper and see how to test a more\ncomplex component."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginForm")," component will be a good example. It is a component that is\ncomprised of other components to make up its functionality. There are form\ninputs to manipulate (with validation) and an HTTP request to consider. We'll\nalso look at additional Angular APIs around component registration and\ndependency injection for more complex components like the ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginForm"),"."),(0,a.kt)("p",null,"Let's get started!"),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"If you continue from lab 2, you can stay in your current branch."),(0,a.kt)("p",null,"If you are starting with lab 3, checkout the ",(0,a.kt)("inlineCode",{parentName:"p"},"lab3-start")," branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout lab3-start\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can find a completed version of this lab in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cypress-io/cypress-heroes-workshop/tree/lab3-complete"},"lab3-complete"),"\nbranch.")),(0,a.kt)("p",null,"If the app is not currently running, start it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=./client",title:"./client"},"npm run start\n")),(0,a.kt)("p",null,"Also, if Cypress is not already running, start it up and launch component\ntesting:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=./client",title:"./client"},"npx cypress open\n")),(0,a.kt)("h2",{id:"create-loginform-spec"},"Create LoginForm Spec"),(0,a.kt)("p",null,"Create a new spec file at\n",(0,a.kt)("strong",{parentName:"p"},"./client/src/app/components/login-form.component.cy.ts")," and paste in the\nfollowing test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/login-form.component.cy.ts",title:"./client/src/app/components/login-form.component.cy.ts"},"describe('LoginForm', () => {\n  it('should mount', () => {\n    cy.mount(LoginFormComponent);\n  });\n});\n")),(0,a.kt)("p",null,"When the spec is run, you'll see an error thrown in the command log:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Login Form Error",src:n(5153).Z,width:"696",height:"513"})),(0,a.kt)("p",null,"The error happens because the HttpClientModule is not currently registered. You might\nwonder why. The app component has the module registered. But we\nare not using the main app component in our test. We are mounting the\n",(0,a.kt)("inlineCode",{parentName:"p"},"LoginFormComponent")," in isolation."),(0,a.kt)("h4",{id:"register-additional-modules-and-declarations"},"Register Additional Modules and Declarations"),(0,a.kt)("p",null,"We've already seen how to register components as declarations by passing in a\n",(0,a.kt)("inlineCode",{parentName:"p"},"declarations")," array into the ",(0,a.kt)("inlineCode",{parentName:"p"},"cy.mount")," command's second parameter. This config\nparameter allows us to register additional ",(0,a.kt)("inlineCode",{parentName:"p"},"imports")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"providers"),"."),(0,a.kt)("p",null,"We can get the test passing by registering the additional modules and\ndeclarations ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginFormComponent")," needs like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/login-form.component.cy.ts",title:"./client/src/app/components/login-form.component.cy.ts"},"import { HttpClientModule } from '@angular/common/http';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { ButtonComponent } from '../button/button.component';\nimport { InputFieldComponent } from '../input-field/input-field.component';\nimport { TextInputComponent } from '../text-input/text-input.component';\nimport { LoginFormComponent } from './login-form.component';\n\ndescribe('LoginForm', () => {\n  it('should mount', () => {\n    cy.mount(LoginFormComponent, {\n      declarations: [\n        InputFieldComponent,\n        ButtonComponent,\n        TextInputComponent,\n      ],\n      imports: [HttpClientModule, ReactiveFormsModule],\n    });\n  });\n});\n")),(0,a.kt)("p",null,"Now the component properly mounts:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Login Form Passes",src:n(1867).Z,width:"1432",height:"546"})),(0,a.kt)("p",null,"However, that is a lot of boilerplate code for each test. Fortunately,\nwe can use a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"cy.mount")," command to do this registration in a reusable,\ncentral location and clean up our specs."),(0,a.kt)("h2",{id:"using-a-custom-mount-command"},"Using a Custom Mount Command"),(0,a.kt)("p",null,"With a custom mount command, we can do the configuration that our tests need to\nexecute before calling the underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"mount")," command."),(0,a.kt)("p",null,"To create one, go into the ",(0,a.kt)("strong",{parentName:"p"},"./client/cypress/support/component.ts")," file and\nreplace the current call to register the mount command (around line 36):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/cypress/support/component.ts",title:"./client/cypress/support/component.ts"},"Cypress.Commands.add('mount', mount);\n")),(0,a.kt)("p",null,"with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/cypress/support/component.ts",title:"./client/cypress/support/component.ts"},"import { HttpClientModule } from '@angular/common/http';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { ButtonComponent } from '../../src/app/components/button/button.component';\nimport { InputFieldComponent } from '../../src/app/components/input-field/input-field.component';\nimport { TextInputComponent } from '../../src/app/components/text-input/text-input.component';\nimport { LoginFormComponent } from '../../src/app/components/login-form/login-form.component';\n\ntype MountParams = Parameters<typeof mount>;\n\nCypress.Commands.add(\n  'mount',\n  (component: MountParams[0], config: MountParams[1] = {}) => {\n    const declarations = [\n      ...(config.declarations || []),\n      LoginFormComponent,\n      InputFieldComponent,\n      ButtonComponent,\n      TextInputComponent,\n    ];\n    const imports = [\n      ...(config.imports || []),\n      HttpClientModule,\n      ReactiveFormsModule,\n    ];\n    return mount(component, {\n      ...config,\n      declarations,\n      imports,\n    });\n  }\n);\n")),(0,a.kt)("p",null,"The new mount command has some predefined ",(0,a.kt)("inlineCode",{parentName:"p"},"declarations")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"imports")," that get\npassed into the underlying mount function, so we don't have to specify them in\neach test."),(0,a.kt)("p",null,"Now you can shorten the test to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/login-form.component.cy.ts",title:"./client/src/app/components/login-form.component.cy.ts"},"it('should mount', () => {\n  cy.mount(LoginFormComponent);\n});\n")),(0,a.kt)("p",null,"Nice \ud83c\udf89!"),(0,a.kt)("p",null,"But we can even take our mount command a step further. In the Heroes app, all components belong to their own ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentsModule"),". So instead of importing each piece individually, we\ncan use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentModule")," in the custom mount command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/cypress/support/component.ts",title:"./client/cypress/support/component.ts"},"import { ComponentsModule } from '../../src/app/components/components.module';\n\ntype MountParams = Parameters<typeof mount>;\n\nCypress.Commands.add(\n  'mount',\n  (component: MountParams[0], config: MountParams[1] = {}) => {\n    const imports = [...(config.imports || []), ComponentsModule];\n    return mount(component, {\n      ...config,\n      imports,\n    });\n  }\n);\n")),(0,a.kt)("p",null,"You can use custom mount commands to suit your needs. You can even create\nmultiple ones with different names (ie: ",(0,a.kt)("inlineCode",{parentName:"p"},"cy.mountInputs"),")."),(0,a.kt)("p",null,"For more information on creating your own custom mount commands, see the guide\non\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/component-testing/custom-mount-angular"},"Custom Mount Commands for Angular"),"."),(0,a.kt)("h2",{id:"test-form-validation"},"Test Form Validation"),(0,a.kt)("p",null,"Ok, back to writing actual tests. We will first look at\ntesting to verify the form validation works as expected. There are three\nrequirements here."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If either of the fields is blank when submitting the form, show messages\nsaying the fields are required."),(0,a.kt)("li",{parentName:"ol"},"The email address must be in the proper format; if not, show a message."),(0,a.kt)("li",{parentName:"ol"},"The form should not submit to the server when in an invalid state.")),(0,a.kt)("h4",{id:"test-required-field-validation"},"Test Required Field Validation"),(0,a.kt)("p",null,"For the first test, we will grab a reference to the button and click it without\nfilling in the email or password. Then we will check that the validation error messages are displayed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/login-form.component.ts",title:"./client/src/app/components/login-form.component.ts"},"it('should show validation messages when inputs are blank', () => {\n  cy.mount(LoginFormComponent);\n  cy.get('button').contains('Sign in').click();\n\n  cy.contains('Email is required.');\n  cy.contains('Password is required.');\n});\n")),(0,a.kt)("h4",{id:"test-email-field-validation"},"Test Email Field Validation"),(0,a.kt)("p",null,"For the next test, we will fill in an invalid value for the email address and verify\nthe message displays after clicking the button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/login-form.component.ts",title:"./client/src/app/components/login-form.component.ts"},"it('should show validation messages when email value is invalid', () => {\n  cy.mount(LoginFormComponent);\n  cy.get('input[type=email]').type('aaabbb');\n  cy.get('button').contains('Sign in').click();\n  cy.contains('Email must be a valid email address.');\n});\n")),(0,a.kt)("p",null,"Above, we use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cypress.io/api/commands/type"},"type()")," command on\nthe email input, which enters text into a DOM element like a user would."),(0,a.kt)("h4",{id:"test-form-is-not-submitted-when-invalid"},"Test Form is Not Submitted when Invalid"),(0,a.kt)("p",null,"Up to this point, we've been testing as a user would use the component, which is\ngreat. This next test will require us to have inside knowledge of what's going on inside of the component. Mentally, we are\ngoing to shift who we are testing for. In the previous tests, we made sure\nthe component was valid for users. In this upcoming test, we will ensure the\ncomponent works as it should for other developers who will consume it."),(0,a.kt)("p",null,"To do so, we will need to know what happens when the users submit the form.\nPeaking at the source, we see that ",(0,a.kt)("inlineCode",{parentName:"p"},"authService.login()")," is being called. We want to ensure this method does not get called when the form is\ninvalid."),(0,a.kt)("p",null,"We can add a spy to the ",(0,a.kt)("inlineCode",{parentName:"p"},"authService.login()")," method and inspect if it was\ncalled or not as we did with the ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ButtonComponent"),"\nfrom the last lesson."),(0,a.kt)("p",null,"Fortunately, Angular's dependency injection system makes this relatively easy to\ndo. We must pass in a mock AuthService with a spy attached to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"login")," method. We'll do so by passing in the mock to the ",(0,a.kt)("inlineCode",{parentName:"p"},"providers"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/login-form.component.ts",title:"./client/src/app/components/login-form.component.ts"},"it('should not try to authenticate if the form fields are invalid', () => {\n  cy.mount(LoginFormComponent, {\n    providers: [\n      {\n        provide: AuthService,\n        useValue: {\n          login: cy.spy().as('loginSpy'),\n        },\n      },\n    ],\n  });\n\n  cy.get('button').contains('Sign in').click();\n  cy.get('@loginSpy').should('not.have.been.called');\n});\n")),(0,a.kt)("p",null,"And with that, you should see that all the validation tests now pass:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Login Form Validation Passes",src:n(5609).Z,width:"1689",height:"595"})),(0,a.kt)("h2",{id:"test-invalid-credentials"},"Test Invalid Credentials"),(0,a.kt)("p",null,"What should the form do when a syntactically valid email and password is entered, but those credentials don't match anything in the system? We display an invalid username or password error."),(0,a.kt)("p",null,"The authentication result comes from the ",(0,a.kt)("inlineCode",{parentName:"p"},"authService.login")," method we mocked in the last test. We could do something similar to test this, but I want to show you another method at your disposal."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"authService.login")," method ultimately makes an HTTP request to check the credentials. We can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cypress.io/api/commands/intercept"},"cy.intercept"),' command to "intercept" the request and return the values we need for the test. When we do so, the HTTP request is never sent to the server, and we effectively turned out component test into an integration test between the component and the ',(0,a.kt)("inlineCode",{parentName:"p"},"AuthService"),"."),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"cy.intercept"),", call the command before the actual HTTP is made and pass in the method type, the path, and the response to return:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/login-form.component.ts",title:"./client/src/app/components/login-form.component.ts"},"it('should show bad login message when credentials are invalid', () => {\n  cy.intercept('POST', '/auth', {\n    statusCode: 401,\n  });\n\n  cy.mount(LoginFormComponent);\n  cy.get('button').contains('Sign in').click();\n\n  cy.get('input[type=email]').type('bad@email.com');\n  cy.get('input[type=password]').type('badpass');\n  cy.get('button').contains('Sign in').click();\n\n  cy.contains('Invalid username or password');\n});\n")),(0,a.kt)("p",null,"We return a 401 status code, which signifies to the client that the authentication request was unsuccessful. The auth service returns an error message saying the username or password was invalid."),(0,a.kt)("h2",{id:"test-valid-credentials"},"Test Valid credentials"),(0,a.kt)("p",null,"When testing what happens when the credentials are valid, we will take a similar approach to the above. Instead of returning a 401 status code, we will return a 200, signifying the request was successful."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginFormComponent")," also has an ",(0,a.kt)("inlineCode",{parentName:"p"},"onLogin")," event output that gets raised when the login is successful. Let's verify that also gets called using the spy techniques we've already used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/components/login-form.component.ts",title:"./client/src/app/components/login-form.component.ts"},"it('should login when credentials are valid', () => {\n  cy.intercept('POST', '/auth', {\n    statusCode: 200,\n    body: {},\n  });\n\n  cy.mount(\n    LoginFormComponent,\n    {\n      componentProperties: {\n        onLogin: createOutputSpy('onLoginSpy'),\n      },\n    }\n  );\n\n  cy.get('input[type=email]').type('good@email.com');\n  cy.get('input[type=password]').type('goodpass');\n\n  cy.get('button').contains('Sign in').click();\n\n  cy.get('@onLoginSpy').should('have.been.called');\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"`createOutputSpy is imported from 'cypress/angular'")),(0,a.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,a.kt)("p",null,"Congrats! You now have the basics for writing Angular Component Tests. Continue your testing journey by visiting the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cypress.com"},"Cypress Documentation"),", learn testing concepts in depth in our ",(0,a.kt)("a",{parentName:"p",href:"https://learn.cypress.io/"},"Real World Testing")," curriculum, and join our online community on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/cMjUZg7"},"Discord"),"."),(0,a.kt)("p",null,"Thanks for attending, and happy testing!"))}c.isMDXComponent=!0},5153:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-form-error-614cb615ccf72838266816c88939db61.jpg"},1867:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-form-passes-8b6d63a2fad7e16a71bc0862c1c5112f.jpg"},5609:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-form-validation-653ade9aeec579a1e22faacb7eebfb5e.jpg"}}]);