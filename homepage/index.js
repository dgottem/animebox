document.addEventListener('DOMContentLoaded', function () {

    function updatePagination() {

        if (typeof (Storage) !== "undefined") {

            //pagination on the homepage
            const trItemPerPage = 10;

            //#top-release div pagination
            let currentPagiPage_1 = sessionStorage.getItem('currentPagiPage_1') || 1;
            const trDivs_1 = document.querySelectorAll('#top-release .tr-list .tr-item');
            const totalPages_1 = Math.ceil(trDivs_1.length / trItemPerPage);
            const paginationSet_1 = document.querySelector('.pagi-set-1');

            function showPage_1(pagiPage_1) {
                const startIndex_1 = (pagiPage_1 - 1) * trItemPerPage;
                const endIndex_1 = startIndex_1 + trItemPerPage;

                trDivs_1.forEach((pagiDiv_1, pagiIndex_1) => {
                    (pagiIndex_1 >= startIndex_1 && pagiIndex_1 < endIndex_1) ? pagiDiv_1.style.display = 'block' : pagiDiv_1.style.display = 'none';
                });
            }

            function goToPagiPage_1(pagiPage_1) {
                currentPagiPage_1 = pagiPage_1;
                sessionStorage.setItem('currentPagiPage_1', currentPagiPage_1);
                showPage_1(currentPagiPage_1);
                updatePagiSet_1();
            }

            function updatePagiSet_1() {
                paginationSet_1.innerHTML = '';

                for (let i = 1; i <= totalPages_1; i++) {
                    const pagiLink_1 = document.createElement('span');
                    pagiLink_1.textContent = i;
                    pagiLink_1.classList.add('pagi-link-1');
                    if (i == currentPagiPage_1) {
                        pagiLink_1.classList.add('active-pagi-1');
                    }
                    pagiLink_1.addEventListener('click', () => goToPagiPage_1(i));
                    paginationSet_1.appendChild(pagiLink_1);
                }
            }

            showPage_1(currentPagiPage_1);
            updatePagiSet_1();


            //#newly-updated div pagination
            let currentPagiPage_2 = sessionStorage.getItem('currentPagiPage_2') || 1;
            const trDivs_2 = document.querySelectorAll('#newly-updated .tr-list .tr-item');
            const totalPages_2 = Math.ceil(trDivs_2.length / trItemPerPage);
            const paginationSet_2 = document.querySelector('.pagi-set-2');

            function showPage_2(pagiPage_2) {
                const startIndex_2 = (pagiPage_2 - 1) * trItemPerPage;
                const endIndex_2 = startIndex_2 + trItemPerPage;

                trDivs_2.forEach((pagiDiv_2, pagiIndex_2) => {
                    (pagiIndex_2 >= startIndex_2 && pagiIndex_2 < endIndex_2) ? pagiDiv_2.style.display = 'block' : pagiDiv_2.style.display = 'none';
                });
            }

            function goToPagiPage_2(pagiPage_2) {
                currentPagiPage_2 = pagiPage_2;
                sessionStorage.setItem('currentPagiPage_2', currentPagiPage_2);
                showPage_2(currentPagiPage_2);
                updatePagiSet_2();
            }

            function updatePagiSet_2() {
                paginationSet_2.innerHTML = '';

                for (let i = 1; i <= totalPages_2; i++) {
                    const pagiLink_2 = document.createElement('span');
                    pagiLink_2.textContent = i;
                    pagiLink_2.classList.add('pagi-link-2');
                    if (i == currentPagiPage_2) {
                        pagiLink_2.classList.add('active-pagi-2');
                    }
                    pagiLink_2.addEventListener('click', () => goToPagiPage_2(i));
                    paginationSet_2.appendChild(pagiLink_2);
                }
            }

            showPage_2(currentPagiPage_2);
            updatePagiSet_2();

        }
    }
    
    updatePagination();

});
