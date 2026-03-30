(async () => {
  const check = await fetch('https://api.github.com/repos/yunolabsinc-blip/yunolabs.kr/contents/sitemap.xml', {
    headers: {'Authorization': 'token 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'}
  });
  const body = {
    message: '사이트맵 추가',
    content: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHVybHNldCB4bWxucz0iaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOSI+CiAgPHVybD4KICAgIDxsb2M+aHR0cHM6Ly93d3cueXVub2xhYnMua3IvPC9sb2M+CiAgICA8bGFzdG1vZD4yMDI2LTAzLTMwPC9sYXN0bW9kPgogICAgPGNoYW5nZWZyZXE+bW9udGhseTwvY2hhbmdlZnJlcT4KICAgIDxwcmlvcml0eT4xLjA8L3ByaW9yaXR5PgogIDwvdXJsPgo8L3VybHNldD4='
  };
  if (check.ok) {
    const d = await check.json();
    body.sha = d.sha;
  }
  const res = await fetch('https://api.github.com/repos/yunolabsinc-blip/yunolabs.kr/contents/sitemap.xml', {
    method: 'PUT',
    headers: {'Authorization': 'token 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', 'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  });
  const result = await res.json();
  console.log(result.commit ? '✅ 업로드 완료!' : '❌ 실패: ' + result.message);
})();