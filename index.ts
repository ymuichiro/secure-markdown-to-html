import showdown from "showdown";
import juice from "juice";
import sanitizeHtml from "sanitize-html";
import { example } from "./example";

function createByTemplate(css: string, sanitizedBody: string): string {
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>mail</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        <div class="wmde-markdown wmde-markdown-color">
          ${sanitizedBody}
        </div>
      </body>
    </html>
  `;
}

function markdownToHtml(markdown: string) {
  const converter = new showdown.Converter();
  const rowHtml = converter.makeHtml(markdown);
  const cleanHtml = sanitizeHtml(rowHtml);
  const template = createByTemplate(example.css, cleanHtml);
  const inlineHtml = juice(template);
  console.log(inlineHtml);
}

markdownToHtml(example.markdown);

// ---- result ----
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>mail</title>
//   </head>
//   <body>
//     <div class="wmde-markdown wmde-markdown-color">
//       <h1 style="color: red">Title</h1>
//       <p><code>test</code></p>
//       <div>
//         <a>delta</a>
//       </div>
//     </div>
//   </body>
// </html>
