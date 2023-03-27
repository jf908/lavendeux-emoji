declare function extension(): Lavendeux.Extension;

declare namespace Lavendeux {
  type Extension = {
    name: string;
    author: string;
    version: string;
    functions?: Record<string, string>;
    decorators?: Record<string, string>;
  };

  type Value =
    | { Boolean: boolean }
    | {
        Integer: number;
      }
    | {
        Float: number;
      }
    | {
        String: string;
      }
    | {
        Identifier: string;
      }
    | {
        Array: Lavendeux.Value[];
      };
}
