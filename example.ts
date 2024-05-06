const css = `
<style>
a {
  color: green;
}

h1 {
  color: red;
}
</style>`;

const markdown = `
# Title

\`test\`

<div onmouseover="alert('alpha')">
  <a href="jAva script:alert('bravo')">delta</a>
  <img src="x" onerror="alert('charlie')">
  <iframe src="javascript:alert('delta')"></iframe>
  <math>
    <mi xlink:href="data:x,<script>alert('echo')</script>"></mi>
  </math>
</div>
<script>
require('child_process').spawn('echo', ['hack!']);
</script>
`;

export const example = {
  css,
  markdown,
};
