declare function extension(): LavendeuxExtension;

type LavendeuxExtension = {
  name: string;
  author: string;
  version: string;
  functions?: Record<string, string>;
  decorator?: Record<string, string>;
};

type LavendeuxValue =
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
      Array: LavendeuxValue[];
    };
