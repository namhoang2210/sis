<template>
    <div class="md:flex justify-between items-center md:px-[10%] bg-white pb-4">
      <img class="h-20 md:h-24 mx-auto md:mx-0" src="https://sis.vnu.edu.vn/images/VNU-SIS-logo(vns).png" alt="">
      <form class="px-10 md:px-0 md:w-[300px] lg:w-[350px] mt-4 md:mt-0">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Tìm kiếm..." required>
            <button type="submit" class="text-white absolute right-2 bottom-[5px] bg-[#0d2c6c] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
        </div>
      </form>
    </div>
    <nav class="navbar navbar-expand-lg shadow-md py-2 bg-[#0d2c6c] relative flex items-center w-full justify-end">
        <div class="px-6 w-full flex flex-wrap items-center justify-end">
        <div class="flex items-center">
            <button
            class="navbar-toggler border-0 py-1 lg:hidden leading-none text-xl bg-transparent text-white hover:text-gray-100 transition-shadow duration-150 ease-in-out mr-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
            </svg>
            </button>
        </div>
        <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
            <ul class="navbar-nav mr-auto w-full lg:flex lg:justify-center lg:gap-6">
                <li class="nav-item text-white uppercase font-semibold">
                    <a class="nav-link block pr-2 lg:px-2 py-2  hover:text-[#d68c06] focus:text-[#d68c06] transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Trang chủ</a>
                </li>
                <li class="nav-item text-white uppercase font-semibold">
                    <a class="nav-link block pr-2 lg:px-2 py-2  hover:text-[#d68c06] focus:text-[#d68c06] transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Thông báo</a>
                </li>
                <li class="nav-item text-white uppercase font-semibold">
                    <a class="nav-link block pr-2 lg:px-2 py-2  hover:text-[#d68c06] focus:text-[#d68c06] transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Quy định</a>
                </li>
                <li class="nav-item text-white uppercase font-semibold">
                    <a class="nav-link block pr-2 lg:px-2 py-2  hover:text-[#d68c06] focus:text-[#d68c06] transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Sổ tay</a>
                </li>
                <li class="nav-item text-white uppercase font-semibold">
                    <a class="nav-link block pr-2 lg:px-2 py-2  hover:text-[#d68c06] focus:text-[#d68c06] transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Dịch vụ</a>
                </li>
                <li class="nav-item text-white uppercase font-semibold">
                    <a class="nav-link block pr-2 lg:px-2 py-2  hover:text-[#d68c06] focus:text-[#d68c06] transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Nhập học</a>
                </li>
                <li class="nav-item text-white uppercase font-semibold">
                    <a class="nav-link block pr-2 lg:px-2 py-2  hover:text-[#d68c06] focus:text-[#d68c06] transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Tra cứu</a>
                </li>
                <li class="nav-item text-white uppercase font-semibold">
                    <a class="nav-link block pr-2 lg:px-2 py-2  hover:text-[#d68c06] focus:text-[#d68c06] transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Liên hệ</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>