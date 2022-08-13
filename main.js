const userDataList = [
    {id: 'dhtnduf', pw: '1111', name: '오수열'},
    {id: 'dhtldud', pw: '920', name: '오시영'},
    {id: 'rlaaltjs', pw: '109', name: '김미선'}
];

const checkIdPwInput = document.querySelector('#check-id-pw');
const searchResult = document.querySelector('#search-result');

checkIdPwInput.addEventListener('click', ()=> {
    const searchId = document.querySelector('#search-id-input').value;
    const searchPw = document.querySelector('#search-pw-input').value;
    findUser(searchId, searchPw);
});

function findUser(searchId, searchPw) {
    const targetData = userDataList.find((data) => data.id === searchId && data.pw === searchPw);
    if (targetData == null) {
        searchResult.textContent = '유저 검색 결과 없음';
        return;
    }
    searchResult.textContent = targetData.name;
}