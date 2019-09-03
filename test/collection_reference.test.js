const assert = require("assert");
const CollectionReferenceMock = require("../mock_constructors/CollectionReferenceMock");
const QueryMock = require("../mock_constructors/QueryMock");

describe("Testing DocumentReferenceMock properties and methods", () => {
  it("Instantiates given an id and firestore ref", () => {
    let col = new CollectionReferenceMock("1", { firestore: true });
    assert.equal(col.id, "1");
    assert.deepEqual(col.firestore, { firestore: true });
    assert.equal(col.path, "This is not supported");
    assert.equal(col.parent, null);
    assert(col instanceof QueryMock);
  });

  it("Throws error when instantiated without an id", () => {
    function error() {
      return new CollectionReferenceMock(undefined, { firestore: true });
    }
    assert.throws(
      error,
      Error,
      "Collection ref instantiated without a collection id"
    );
  });

  it("Throws error when instantiated without a firestore reference", () => {
    function error() {
      return new CollectionReferenceMock("1", undefined);
    }
    assert.throws(
      error,
      Error,
      "Collection ref instantiated without firestore reference. Was this collection ref created through a Firestore instance?"
    );
  });

  it("Returns a DocumentReferenceMock when doc method is called", () => {
    let col = new CollectionReferenceMock("1", { firestore: true });
    console.log(col.proto);
    let doc_ref = col.doc("2");
    assert.equal(doc_ref.constructor.name, "DocumentReferenceMock");
  });
});
