import marked from 'marked';

const preParsedLink = RegExp(/<p>\(<a\shref="https:\/\/www\.youtube\.com\/watch\?v=(.+)".+/);
const targetStr = '<div class="youtube"><iframe type="text/html" src="https://youtube.com/embed/$1"></iframe></div>';

marked.setOptions({
  headerIds: false,
});

function handleContext(text) {
  let context = marked(text);
  while(preParsedLink.exec(context)!==null){
    context = context.replace(preParsedLink, targetStr);
  }
  return context;
}

export default handleContext;