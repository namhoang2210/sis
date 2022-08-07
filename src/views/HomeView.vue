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
    <div class="text-4xl font-semibold text-gray-800 text-center pt-8 uppercase">Thông báo - Tin tức</div>
    <hr class="h-2 w-[50px] mx-auto bg-[#0d2c6c] mt-8 rounded-full">
    <div class="grid lg:grid-cols-3 px-6 md:px-[10%] mt-10 text-gray-800 gap-10">
      <div class="">
        <div class=" flex items-center gap-1 bg-[#d68c06] px-2 text-white py-2 rounded w-[206px]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          <div class="text-lg font-semibold uppercase">Đào tạo đại học</div>
        </div>
        <hr class="mt-6 h-1.5 bg-[#d68c06] rounded-full">
        <div class="mt-6">
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        3 phút trước
                    </div>

                </div>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        16h30p
                    </div>

                </div>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  03
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        15h20p
                    </div>

                </div>
              </div>
          </div>
           <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  03
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        15h20p
                    </div>

                </div>
              </div>
          </div>
           <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  03
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        15h20p
                    </div>

                </div>
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

      <div class="">
      <div class=" flex items-center gap-1 px-2 bg-[#d68c06] w-[246px] text-white py-2 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div class="text-lg font-semibold uppercase">Đào tạo sau đại học</div>
        </div>
        <hr class="mt-6 h-1.5 bg-[#d68c06] rounded-full">
        <div class="mt-6">
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        3 phút trước
                    </div>

                </div>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  04
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        16h30p
                    </div>

                </div>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  03
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        15h20p
                    </div>

                </div>
              </div>
          </div>
           <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  03
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        15h20p
                    </div>

                </div>
              </div>
          </div>
           <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  03
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        15h20p
                    </div>

                </div>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  03
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        15h20p
                    </div>

                </div>
              </div>
          </div>
          <div class="h-[100px] rounded border mb-6 flex overflow-clip ">
              <div class="h-full min-w-[100px] bg-gray-100 text-center pt-5 text-lg">
                  <span class="text-[#d68c06] text-xl">Tháng 10</span> <br>
                  03
              </div>
              <div class="pt-2 px-3">
                <div class="font-semibold">THÔNG BÁO BUỔI TƯ VẤN TUYỂN SINH VÀ GẶP GỠ CHUYÊN GIA</div>
                <div class="flex gap-1 mt-2 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        15h20p
                    </div>
                </div>
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
      <div class="">
        <div class=" flex items-center gap-1 px-2 bg-[#d68c06] w-[160px] text-white py-2 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
          <div class="text-lg font-semibold uppercase">Tuyển dụng</div>
        </div>
        <hr class="mt-6 h-1.5 bg-[#d68c06] rounded-full">
        <div class="mt-6">
          <div class="h-[180px]  overflow-clip ">
            <div class="text-lg font-semibold">Tuyển dụng vị trí CHUYÊN GIA, DOANH NGHIỆP</div>
            <div class="flex gap-1 my-1 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        3/10/2022
                    </div>
            </div>
            <p>Chiều về là lúc bến sông quê tôi tấp nập nhất. Đoàn thuyền chở các bà, các chị từ chợ huyện, chợ tỉnh về cập bến. Các bà các chị được đàn con ùa ra đón. Con lớn đỡ cho mẹ gánh hàng. Con nhỏ vòi mẹ chia quà. Tiếng cười nói rộn ràng cả một khúc sông. Rồi ai về nhà nây. </p>
            
          </div>
          <hr class="my-3">
          <div class="h-[180px] overflow-clip ">
            <div class="text-lg font-semibold">Tuyển dụng vị trí CHUYÊN GIA, DOANH NGHIỆP</div>
            <div class="flex gap-1 my-1 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        3/10/2022
                    </div>
            </div>
            <p>Chiều về là lúc bến sông quê tôi tấp nập nhất. Đoàn thuyền chở các bà, các chị từ chợ huyện, chợ tỉnh về cập bến. Các bà các chị được đàn con ùa ra đón. Con lớn đỡ cho mẹ gánh hàng. Con nhỏ vòi mẹ chia quà. Tiếng cười nói rộn ràng cả một khúc sông. Rồi ai về nhà nây. </p>
          </div>
          <hr class="my-3">
          <div class="h-[180px] overflow-clip ">
            <div class="text-lg font-semibold">Tuyển dụng vị trí CHUYÊN GIA, DOANH NGHIỆP</div>
            <div class="flex gap-1 my-1 items-center text-sm text-gray-500 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        3/10/2022
                    </div>
            </div>
            <p>Chiều về là lúc bến sông quê tôi tấp nập nhất. Đoàn thuyền chở các bà, các chị từ chợ huyện, chợ tỉnh về cập bến. Các bà các chị được đàn con ùa ra đón. Con lớn đỡ cho mẹ gánh hàng. Con nhỏ vòi mẹ chia quà. Tiếng cười nói rộn ràng cả một khúc sông. Rồi ai về nhà nây. </p>
          </div>
          <hr class="my-3">
          <h1 class="text-lg font-semibold flex gap-1 items-start mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            <div>Vị trí của chúng tôi</div> 
          </h1>
          <iframe class="mt-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29791.00313867419!2d105.74661117910155!3d21.0376713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b55b011e49%3A0x9406c12dc4604160!2zxJDhuqFpIGjhu41jIFF14buRYyBnaWEgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1659862633487!5m2!1svi!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
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
