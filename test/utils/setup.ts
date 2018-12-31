import { Test } from "tape";
import { AbstractGraphAdapterQueryHandlers } from 'juno-falcor-router';
import { noop } from "../../src/utils/utils";


export const testObserver = (assert: Test, adapter: AbstractGraphAdapterQueryHandlers) => ({
  next: noop,
  error: (err) => {
    if (err instanceof Error) {
      assert.fail(err.toString());
    } else {
      assert.fail(JSON.stringify(err));
    }
  },
  complete: () => {
    assert.end();
  }
});
