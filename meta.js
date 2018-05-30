module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "appid": {
      "type": "string",
      "required": false,
      "message": "wxmp appid",
      "default": "touristappid"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Mpvue project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        // {
        //   "name": "Runtime + Compiler: recommended for most users",
        //   "value": "standalone",
        //   "short": "standalone"
        // },
        {
          "name": "Runtime-only: no custom render function, only can compile template in *.vue",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "vuex": {
      "type": "confirm",
      "message": "Use Vuex?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use TSLint to lint your code?"
    },
    "test": {
      "value": false,
      "message": "小程序测试，敬请关注最新微信开发者工具的“测试报告”功能"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    // "config/test.env.js": "unit || e2e",
    // "test/unit/**/*": "unit",
    // "build/webpack.test.conf.js": "unit",
    // "test/e2e/**/*": "e2e"
    "config/test.env.js": "test",
    "test/unit/**/*": "test",
    "build/webpack.test.conf.js": "test",
    "test/e2e/**/*": "test",
    "src/pages/counter/*": "vuex",
  },
  // "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at http://mpvue.com"
};
