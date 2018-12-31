import express from 'express';
import { dataSourceRoute } from 'falcor-express';
import { createRouter, createGraph, createHandlerAdapter } from 'juno-falcor-router';
import { WikidataAdapter } from './adapter/wikidata';


const PORT = process.env.PORT || 3000;

const app = express();

const JunoGraphRouter = createRouter();


app.use('/api/model.json', dataSourceRoute(() => (
  new JunoGraphRouter([
    createGraph(
      createHandlerAdapter(new WikidataAdapter()),
      {
        key: 'wikidata',
        label: 'Wikidata',
        domains: [/^wkd/],
      }
    ),
  ])
)));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
