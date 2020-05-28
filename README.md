# Design System Challenge

Create an Angular application that best reflects the intent of the SAM Design System and supports the SAM.gov ecosystem.

# Getting Started
This repository is setup to work with federalist for hosting and demo purposes.

 1. Fork this repository for your team to work in.
 2. Perform the challenge, create an application using the design system that best meets the scoring criteria. Please don't squash your commits! 
 3. Prior to the challenge deadline, make sure your application builds with AOT/Prod mode.
 4. Open a pull request against your teams branch in this repository. 
 5. Confirm that your branch builds and is available in federalist.


## Helpful links

 - [Design System Component Documentation](https://cg-fa19003e-5296-4960-ac2e-caccfeb620ac.app.cloud.gov/site/gsa/sam-design-system)
 - [Design System Component Repository](https://github.com/GSA/sam-design-system)
 - [Design System CSS Framework Documentation](https://federalist-0ad5a602-ca98-4a7e-8d6e-d9ece7bc4cf8.app.cloud.gov/site/gsa/sam-styles/)
 - [Design System CSS Repository](https://github.com/GSA/sam-styles)
 - [Design System Prototypes](https://federalist-e1ade7fb-52e9-46c3-b273-1ab1fd05e2fa.app.cloud.gov/site/gsa/sam-prototypes/)
 - [Design System Prototypes Repository](https://github.com/GSA/sam-prototypes)
 - [United States Web Design System](https://designsystem.digital.gov/)


## Our Thoughts

Having to use personal GitHub accounts for this was a little strange. Since this is a GSA initiative it would make sense to use our GSA given accounts for it.

We ran into an unknown and undiagnosed error while trying to use the SdsToolbarModule. Though once the code was included with the rest of the project, the error disappeared. 

Overall, having more documentation in a centralized location would help make using the Design System easier. Now there is the design site, which has examples, but having text to go with it to tell users what they need to import or possibly create themselves would go a long way. For example, with the Autocomplete component you need to provide the configuration, model, and service. The configuration and model are fairly straightforward and the example shows a way to use it, but the service is something that we need to provide, implementing the ServiceInterface. Also having a guide for how to use components through the FormlyFieldConfig would be helpful as well. It could show us the different fields we can use and what options they have.
