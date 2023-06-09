const sCacheName = "hello-pwa"; // 캐시 제목 < 하나의 메모장 파일이라고 생각하면 됨
const aFilesToCache = [
  // 불러 올 캐쉬를 저장하는 공간
  // 캐시할 파일 지정
  "./",
  "./index.html",
  "./manifest.json",
  "./images/icons/android-chrome-512x512.png",
];

self.addEventListener("install", (pEvent) => {
  console.log("서비스 워커 설치 완료!");
  pEvent.waitUntil(
    caches.open(sCacheName).then((pCache) => {
      console.log("캐시에 파일 저장 완료!");
      return pCache.addAll(aFilesToCache);
    })
  );
});

self.addEventListener("activate", (pEvent) => {
  console.log("서비스워커 동작 시작됨!");
});

//4.데이터 요청시 네트워크 또는 캐시에서 찾아 반환
self.addEventListener("fetch", (pEvent) => {
  pEvent.respondWith(
    caches
      .match(pEvent.request)
      .then((response) => {
        if (!response) {
          console.log("네트워크로 데이터 요청!", pEvent.request);
          return fetch(pEvent.request);
        }
        console.log("캐시에서 데이터 요청!", pEvent.request);
        return response;
      })
      .catch((err) => console.log(err))
  );
});
