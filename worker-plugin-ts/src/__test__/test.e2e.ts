import { PluginTester } from "@tossplace/pos-plugin-test";

jest.setTimeout(4000000);
describe("e2e test", () => {
  it("test-plugin", (done: any) => {
    const tester = new PluginTester();
    tester.start(done);
  });
});
