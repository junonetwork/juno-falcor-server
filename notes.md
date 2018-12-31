# TODO for presentation
- [ ] make Record searches return multiple values
- [ ] create entity-reference adapter
  - return type minimally
  - if possible, query for label
  - make sure that fields are the same as entity (juno table can't have multiple types)
- [ ] add Record title to Metadata vertex?
- [ ] all types are atom strings, but should be refs to types


# Daniel's Proposal
- [ ] standardize schema/data model across sources
- [ ] standardized approach for making backwards-compatible schema changes
- [ ] parse produces a graph, not document
- [ ] use avro to serialize parse output
- [ ] schema is based on a config, not build into code; housed in a service

## how to replace collider
- can we take an Avro schema and produce instructions for
  - how ElasticSearch indexes the fields?
  - how to map fields to labels?
  - other requirements?
- can we at least agree on the need to move beyond collider?

## Source Catalogue
- metadta
  - primary key
  - primitive type
  - field key, Json key, Bson key (not needed?)
  - elastic field name and type (text, int, etc), and options (boost, analyzer,)
  - label
  - Keyword?
  - DisplayUrl
  - how to translate a field
  - if a field can be geocoded
  - if a record's date can be determined by a specific field 
- schemaless fields (fields that don't make it into base ontology) will still need definitions for how to visualize it (see metadata above)
  - e.g. Slovakia `Registered Seat`
  - 


**what was the final suggestion by Farley?**

**how to handle Record versioning?**

# change of focus
- can we be proactive on this
- forking/R&D
- transition plan?
