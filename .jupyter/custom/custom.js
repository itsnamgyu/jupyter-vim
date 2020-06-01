// Configure CodeMirror Keymap
require([
  'nbextensions/vim_binding/vim_binding',   // depends your installation
], function() {
  // Map fj to <Esc>
  CodeMirror.Vim.map("fj", "<Esc>", "insert");
  CodeMirror.Vim.map("jf", "<Esc>", "insert");
  CodeMirror.Vim.map("Fj", "<Esc>", "insert");
  CodeMirror.Vim.map("fJ", "<Esc>", "insert");
  CodeMirror.Vim.map("FJ", "<Esc>", "insert");
  CodeMirror.Vim.map("Jf", "<Esc>", "insert");
  CodeMirror.Vim.map("jF", "<Esc>", "insert");
  CodeMirror.Vim.map("JF", "<Esc>", "insert");
});
