(async () => {
  // 파일이 이미 있는지 확인
  const check = await fetch('https://api.github.com/repos/yunolabsinc-blip/yunolabs.kr/contents/navercf09af4a244b8d9fb95a7d1ab8121e06.html', {
    headers: {'Authorization': 'token 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'}
  });
  
  const body = {
    message: '네이버 서치어드바이저 소유확인 파일 추가',
    content: 'bmF2ZXItc2l0ZS12ZXJpZmljYXRpb246IG5hdmVyY2YwOWFmNGEyNDRiOGQ5ZmI5NWE3ZDFhYjgxMjFlMDYuaHRtbA=='
  };
  
  // 이미 있으면 sha 추가
  if (check.ok) {
    const d = await check.json();
    body.sha = d.sha;
  }
  
  const res = await fetch('https://api.github.com/repos/yunolabsinc-blip/yunolabs.kr/contents/navercf09af4a244b8d9fb95a7d1ab8121e06.html', {
    method: 'PUT',
    headers: {'Authorization': 'token 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', 'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  });
  const result = await res.json();
  console.log(result.commit ? '✅ 업로드 완료!' : '❌ 실패: ' + result.message);
})();