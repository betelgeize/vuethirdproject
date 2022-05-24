const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // intOnSave:false
});

// vue.config.js
// module.exports = {
// 	devServer: {
// 		overlay: {
// 			warnings: false, // Нет предупреждения
// 			errors: false	// Не отображать ошибки
// 		}
// 	},
// 	lintOnSave:false // Закрываем проверку eslint
// }
