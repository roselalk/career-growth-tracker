//Niet de meest elegante oplossing, ik zoek hier nog een betere oplossing voor.
//(Laat het weten als jullie een oplossing hebben/willen sparren!)
//Voor de stories in items.js wil ik naar dit bestand kunnen verwijzen en dan
//een status/tag/LO kunnen selecteren, zodat ik ze niet per ongeluk kan misspellen,
//en ik ze maar op 1 plek van naam hoef te veranderen als ik dat wil. Het selecteren
//van zo'n status/tag/LO uit dit bestand lukt me alleen maar als het een object is.
//Maar voor het Filter wil ik over alle statuses/tags/LOs per categorie heen kunnen
//loopen, wat me niet lukte met dit object, dus heb ik in enumArray.js
//een array van 1 object met daarin arrays voor status/tags/LOs gemaakt.

//object containing objects
export default {
  status: {
    open: "open",
    doing: "doing",
    done: "done",
  },
  tags: {
    frontend: "frontend",
    bug: "bug",
    fix: "fix",
    feature: "feature",
  },
  learningOpportunities: {
    React: "React",
    redirects: "redirects",
    legacy: "legacy",
    dependencies: "dependencies",
    HRS: "HRS",
  },
};

