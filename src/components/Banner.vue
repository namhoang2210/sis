<template>
    <div id="carouselExampleCaptions" class="carousel slide relative md:px-[10%]" data-bs-ride="carousel">
    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
        ></button>
        <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        ></button>
        <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        ></button>
    </div>
    <div class="carousel-inner relative w-full overflow-hidden max-h-[400px]">
        <div class="carousel-item active relative float-left w-full">
        <img
            src="https://sis.vnu.edu.vn/images/system/1/cover%20website%20moi%202022%20(2)-2022_02_25_105531.png"
            class="block w-full h-auto"
            alt="..."
        />
        </div>
        <div class="carousel-item relative float-left w-full">
        <img
            src="https://sis.vnu.edu.vn/images/system/3/website%20banner%20nho%20x3%20%20(600%20%C3%97%20200%20px)%20(4)-2022_02_28_050733.png"
            class="block w-full h-auto"
            alt="..."
        />
        </div>
        <div class="carousel-item relative float-left w-full">
        <img
            src="https://sis.vnu.edu.vn/images/system/3/website%20banner%20nho%20x3%20%20(600%20%C3%97%20200%20px)%20(5)-2022_02_28_050737.png"
            class="block w-full h-auto"
            alt="..."
        />
        </div>
    </div>
    <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
    >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next text-black absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
    >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>

    <div class="bg-[#0d2c6c] text-white grid lg:grid-cols-5 py-10 gap-10 font-bold grid-cols-3 px-3 lg:px-[15%]">
    <div class="text-center">
        <div class="lg:text-3xl text-2xl font-bold">20 Năm</div>
        <div class="lg:text-lg text-sm pt-2">
            Xây dựng <br>
            và phát triển
        </div>
    </div>
    <div class="text-center">
        <div class="lg:text-3xl text-2xl font-bold whitespace-nowrap">2000 +</div>
        <div class="lg:text-lg text-sm pt-2">
            Sinh viên <br>
            tuyển dụng mỗi năm
        </div>
    </div>
    <div class="text-center">
        <div class="lg:text-3xl text-2xl font-bold">10</div>
        <div class="lg:text-lg text-sm pt-2">
           Cơ sở <br>
           trên cả nước
        </div>
    </div>
    <div class="text-center">
        <div class="lg:text-3xl text-2xl font-bold">300+</div>
        <div class="lg:text-lg text-sm pt-2">
           Đội ngũ giảng viên <br>
            Chất lượng
        </div>
    </div>
    <div class="text-center">
        <div class="lg:text-3xl text-2xl font-bold">2</div>
        <div class="lg:text-lg text-sm pt-2">
            Văn phòng tại <br>
            Hà Nội và Tp.HCM
        </div>
    </div>
    </div>
</template>