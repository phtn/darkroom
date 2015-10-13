ServiceConfiguration.configurations.remove({ service: ['google'] });

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  { $set: { 
  	clientId: "639832487310-kqm93ds8gicd99l81i98ffm73h4m4i1i.apps.googleusercontent.com", 
  	secret: "0XI8h_1xADr15bbXHAAbHPOm" 
  } }
);