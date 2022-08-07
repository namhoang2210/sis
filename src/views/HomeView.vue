<template>
  <Header />
  <Banner />
  <!-- <div class="lg:flex justify-between lg:gap-20 px-4 mt-10 lg:px-[10%] bg-white pb-10">
    <div class="font-bold lg:text-5xl text-center lg:text-start text-xl pb-6">Làm chủ thế giới bằng tri thức liên ngành</div>
    <div class="lg:w-1/2">
        <p>Khoa là một đơn vị trọng điểm về đào tạo và nghiên cứu chất lượng cao đối với các chương trình có tính liên ngành liên lĩnh vực; cung cấp các dịch vụ, chuyển giao tri thức liên ngành, liên lĩnh vực góp phần xây dựng, phát triển đất nước..</p>
        <a href="{{ route('about') }}" class="flex justify-center lg:justify-start">
            <button class="px-6 py-2 rounded bg-[#0d2c6c] text-white hover:bg-[#d68c06] mt-6 lg:mt-4">Về chúng tôi</button>
        </a>
    </div>
  </div> -->
  <div class="bg-white pb-10">
    <div class="text-4xl font-semibold text-gray-800 text-center pt-8 uppercase">Tin tức - Sự kiện</div>
    <hr class="h-2 w-[50px] mx-auto bg-[#0d2c6c] mt-8 rounded-full">
    <div class="grid lg:grid-cols-8 px-6 md:px-[10%] mt-10 text-gray-800 gap-20">
      <div class="lg:col-span-5">
        <div class=" flex items-center gap-1 bg-[#d68c06] w-40 text-white justify-center py-2 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
          <div class="text-lg font-semibold uppercase">Thông báo</div>
        </div>
        <hr class="mt-6 h-1.5 bg-[#d68c06] rounded-full">
        <div class="mt-6">
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-4 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-1 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA, DOANH NGHIỆP</div>
                <p class="text-gray-600 text-[14px] mt-1">
                  Kính chào quý phụ huynh và các thí sinh 2k4 hoặc thí sinh tự do đến với chuỗi tư vấn tuyển sinh đại học định kỳ với chủ đề "10 vạn câu hỏi..." về các nội dung chính:
                      🎯Giải đáp thắc mắc của các bạn học sinh và phụ huynh về cách đặt nguyện vọng, điểm chuẩn, vị trí việc làm, học bổng...
                      ️🎯Gặp gỡ và trò chuyện với các giảng viên, chuyên gia của 4 lĩnh vực: Thương hiệu, Giải trí & Sự kiện, Đô thị, Di sản

                      Đơn vị tổ chức: Phòng Truyền thông và Tuyển sinh - Khoa Các khoa học liên ngành, Đại học Quốc gia Hà Nội.
                </p>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-4 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-1 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA, DOANH NGHIỆP</div>
                <p class="text-gray-600 text-[14px] mt-1">
                  Kính chào quý phụ huynh và các thí sinh 2k4 hoặc thí sinh tự do đến với chuỗi tư vấn tuyển sinh đại học định kỳ với chủ đề "10 vạn câu hỏi..." về các nội dung chính:
                      🎯Giải đáp thắc mắc của các bạn học sinh và phụ huynh về cách đặt nguyện vọng, điểm chuẩn, vị trí việc làm, học bổng...
                      ️🎯Gặp gỡ và trò chuyện với các giảng viên, chuyên gia của 4 lĩnh vực: Thương hiệu, Giải trí & Sự kiện, Đô thị, Di sản

                      Đơn vị tổ chức: Phòng Truyền thông và Tuyển sinh - Khoa Các khoa học liên ngành, Đại học Quốc gia Hà Nội.
                </p>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-4 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-1 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA, DOANH NGHIỆP</div>
                <p class="text-gray-600 text-[14px] mt-1">
                  Kính chào quý phụ huynh và các thí sinh 2k4 hoặc thí sinh tự do đến với chuỗi tư vấn tuyển sinh đại học định kỳ với chủ đề "10 vạn câu hỏi..." về các nội dung chính:
                      🎯Giải đáp thắc mắc của các bạn học sinh và phụ huynh về cách đặt nguyện vọng, điểm chuẩn, vị trí việc làm, học bổng...
                      ️🎯Gặp gỡ và trò chuyện với các giảng viên, chuyên gia của 4 lĩnh vực: Thương hiệu, Giải trí & Sự kiện, Đô thị, Di sản

                      Đơn vị tổ chức: Phòng Truyền thông và Tuyển sinh - Khoa Các khoa học liên ngành, Đại học Quốc gia Hà Nội.
                </p>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-4 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-1 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA, DOANH NGHIỆP</div>
                <p class="text-gray-600 text-[14px] mt-1">
                  Kính chào quý phụ huynh và các thí sinh 2k4 hoặc thí sinh tự do đến với chuỗi tư vấn tuyển sinh đại học định kỳ với chủ đề "10 vạn câu hỏi..." về các nội dung chính:
                      🎯Giải đáp thắc mắc của các bạn học sinh và phụ huynh về cách đặt nguyện vọng, điểm chuẩn, vị trí việc làm, học bổng...
                      ️🎯Gặp gỡ và trò chuyện với các giảng viên, chuyên gia của 4 lĩnh vực: Thương hiệu, Giải trí & Sự kiện, Đô thị, Di sản

                      Đơn vị tổ chức: Phòng Truyền thông và Tuyển sinh - Khoa Các khoa học liên ngành, Đại học Quốc gia Hà Nội.
                </p>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-4 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-1 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA, DOANH NGHIỆP</div>
                <p class="text-gray-600 text-[14px] mt-1">
                  Kính chào quý phụ huynh và các thí sinh 2k4 hoặc thí sinh tự do đến với chuỗi tư vấn tuyển sinh đại học định kỳ với chủ đề "10 vạn câu hỏi..." về các nội dung chính:
                      🎯Giải đáp thắc mắc của các bạn học sinh và phụ huynh về cách đặt nguyện vọng, điểm chuẩn, vị trí việc làm, học bổng...
                      ️🎯Gặp gỡ và trò chuyện với các giảng viên, chuyên gia của 4 lĩnh vực: Thương hiệu, Giải trí & Sự kiện, Đô thị, Di sản

                      Đơn vị tổ chức: Phòng Truyền thông và Tuyển sinh - Khoa Các khoa học liên ngành, Đại học Quốc gia Hà Nội.
                </p>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-4 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-1 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA, DOANH NGHIỆP</div>
                <p class="text-gray-600 text-[14px] mt-1">
                  Kính chào quý phụ huynh và các thí sinh 2k4 hoặc thí sinh tự do đến với chuỗi tư vấn tuyển sinh đại học định kỳ với chủ đề "10 vạn câu hỏi..." về các nội dung chính:
                      🎯Giải đáp thắc mắc của các bạn học sinh và phụ huynh về cách đặt nguyện vọng, điểm chuẩn, vị trí việc làm, học bổng...
                      ️🎯Gặp gỡ và trò chuyện với các giảng viên, chuyên gia của 4 lĩnh vực: Thương hiệu, Giải trí & Sự kiện, Đô thị, Di sản

                      Đơn vị tổ chức: Phòng Truyền thông và Tuyển sinh - Khoa Các khoa học liên ngành, Đại học Quốc gia Hà Nội.
                </p>
              </div>
          </div>
           <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-4 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-1 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA, DOANH NGHIỆP</div>
                <p class="text-gray-600 text-[14px] mt-1">
                  Kính chào quý phụ huynh và các thí sinh 2k4 hoặc thí sinh tự do đến với chuỗi tư vấn tuyển sinh đại học định kỳ với chủ đề "10 vạn câu hỏi..." về các nội dung chính:
                      🎯Giải đáp thắc mắc của các bạn học sinh và phụ huynh về cách đặt nguyện vọng, điểm chuẩn, vị trí việc làm, học bổng...
                      ️🎯Gặp gỡ và trò chuyện với các giảng viên, chuyên gia của 4 lĩnh vực: Thương hiệu, Giải trí & Sự kiện, Đô thị, Di sản

                      Đơn vị tổ chức: Phòng Truyền thông và Tuyển sinh - Khoa Các khoa học liên ngành, Đại học Quốc gia Hà Nội.
                </p>
              </div>
          </div>
           <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-4 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-1 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA, DOANH NGHIỆP</div>
                <p class="text-gray-600 text-[14px] mt-1">
                  Kính chào quý phụ huynh và các thí sinh 2k4 hoặc thí sinh tự do đến với chuỗi tư vấn tuyển sinh đại học định kỳ với chủ đề "10 vạn câu hỏi..." về các nội dung chính:
                      🎯Giải đáp thắc mắc của các bạn học sinh và phụ huynh về cách đặt nguyện vọng, điểm chuẩn, vị trí việc làm, học bổng...
                      ️🎯Gặp gỡ và trò chuyện với các giảng viên, chuyên gia của 4 lĩnh vực: Thương hiệu, Giải trí & Sự kiện, Đô thị, Di sản

                      Đơn vị tổ chức: Phòng Truyền thông và Tuyển sinh - Khoa Các khoa học liên ngành, Đại học Quốc gia Hà Nội.
                </p>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-4 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-1 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA, DOANH NGHIỆP</div>
                <p class="text-gray-600 text-[14px] mt-1">
                  Kính chào quý phụ huynh và các thí sinh 2k4 hoặc thí sinh tự do đến với chuỗi tư vấn tuyển sinh đại học định kỳ với chủ đề "10 vạn câu hỏi..." về các nội dung chính:
                      🎯Giải đáp thắc mắc của các bạn học sinh và phụ huynh về cách đặt nguyện vọng, điểm chuẩn, vị trí việc làm, học bổng...
                      ️🎯Gặp gỡ và trò chuyện với các giảng viên, chuyên gia của 4 lĩnh vực: Thương hiệu, Giải trí & Sự kiện, Đô thị, Di sản

                      Đơn vị tổ chức: Phòng Truyền thông và Tuyển sinh - Khoa Các khoa học liên ngành, Đại học Quốc gia Hà Nội.
                </p>
              </div>
          </div>
        </div>
        <button class="bg-[#d68c06] text-white hover:bg-yellow-500 px-4 py-2 rounded text-[14px] flex items-center gap-1">
          <div>
            Xem thêm
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div class="lg:col-span-3">
        <div class="flex items-center gap-1  bg-[#d68c06] w-36 text-white justify-center py-2 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <div class="text-lg font-semibold uppercase">Tin tức</div>
        </div>
        <hr class="mt-6 h-1.5 bg-[#d68c06] rounded-full">
        <div class="mt-6">
          <div class="flex justify-center mb-6">
            <div class="flex h-[180px] bg-white border rounded">
              <img class="w-[140px] h-full object-cover rounded-l" src="https://sis.vnu.edu.vn/images/posts/388/2022_07_30_114722.jpg" alt="" />
              <div class="px-2 pt-1 flex flex-col justify-start overflow-clip">
                <div class="font-semibold h-">HỘI NGHỊ GIẢNG VIÊN NĂM HỌC 2022-2023</div>
                <p class="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center mb-6">
            <div class="flex h-[180px] bg-white border rounded">
              <img class="w-[140px] h-full object-cover rounded-l" src="https://sis.vnu.edu.vn/images/posts/388/2022_07_30_114722.jpg" alt="" />
              <div class="px-2 pt-1 flex flex-col justify-start overflow-clip">
                <div class="font-semibold h-">HỘI NGHỊ GIẢNG VIÊN NĂM HỌC 2022-2023</div>
                <p class="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center mb-6">
            <div class="flex h-[180px] bg-white border rounded">
              <img class="w-[140px] h-full object-cover rounded-l" src="https://sis.vnu.edu.vn/images/posts/388/2022_07_30_114722.jpg" alt="" />
              <div class="px-2 pt-1 flex flex-col justify-start overflow-clip">
                <div class="font-semibold h-">HỘI NGHỊ GIẢNG VIÊN NĂM HỌC 2022-2023</div>
                <p class="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center mb-6">
            <div class="flex h-[180px] bg-white border rounded">
              <img class="w-[140px] h-full object-cover rounded-l" src="https://sis.vnu.edu.vn/images/posts/388/2022_07_30_114722.jpg" alt="" />
              <div class="px-2 pt-1 flex flex-col justify-start overflow-clip">
                <div class="font-semibold h-">HỘI NGHỊ GIẢNG VIÊN NĂM HỌC 2022-2023</div>
                <p class="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
        <a class="text-blue-600 text-sm " href="">Xem thêm tin tức...</a>
        <iframe class="mt-6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29791.00313867419!2d105.74661117910155!3d21.0376713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b55b011e49%3A0x9406c12dc4604160!2zxJDhuqFpIGjhu41jIFF14buRYyBnaWEgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1659862633487!5m2!1svi!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import {defineComponent} from "vue";
import {Header, Banner, Footer} from '@/components'
export default {
  components: {
    Header,
    Banner,
    Footer 
  }
}
</script>
