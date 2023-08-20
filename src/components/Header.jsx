const Header = () => {
    return (  
        <header className=" sticky top-0 z-100 pt-5">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-orange-600" href="/">
                            <span className="sr-only">Home</span>
                            <svg width="124" height="67" viewBox="0 0 124 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.8206 35.9809C44.6799 37.795 44.4466 39.5251 44.4377 41.2534C44.4377 43.121 44.6158 44.9923 44.76 46.8582C44.7992 47.3425 44.8847 48.002 45.5133 48.0503C46.1419 48.0986 46.4375 47.482 46.5461 46.9779C46.9753 44.9977 47.4365 43.0138 47.6716 41.0067C47.871 39.3106 47.7873 37.5806 47.798 35.8648C47.798 35.5216 47.8425 35.3286 48.2165 35.2589C50.1557 34.9014 52.0914 34.5172 54.093 34.1311C54.0628 34.3653 54.0503 34.5351 54.0182 34.6995C53.3932 37.8683 53.005 41.0514 53.3861 44.2863C53.4205 44.6197 53.494 44.9479 53.6051 45.264C53.8366 45.8984 54.2658 46.0146 54.7893 45.5767C55.0451 45.3617 55.2635 45.1057 55.4357 44.8189C56.5726 42.8927 57.3566 40.7778 57.7507 38.5743C58.0357 37.0158 57.8202 35.3679 57.8273 33.7594C57.8273 33.4984 57.8273 33.2375 57.8273 33.1142L64.2167 32.6817C64.2007 32.771 64.1811 32.939 64.1419 33.0999C63.4296 36.0399 62.9381 39.0086 63.1215 42.0505C63.1377 42.4072 63.1939 42.7609 63.2889 43.105C63.4973 43.802 63.987 43.9986 64.4714 43.4803C65.0656 42.8529 65.5475 42.1274 65.896 41.3356C67.0321 38.6225 68.0934 35.8773 69.1459 33.1303C69.9116 31.1321 72.9425 30.0044 74.7874 31.0731C75.3661 31.4092 75.4516 31.9006 75.0082 32.3957C74.9209 32.4958 74.8105 32.5744 74.7144 32.6674C73.8988 33.443 73.897 34.233 74.7001 35.0409C75.375 35.7218 76.025 36.426 76.7142 37.0908C79.4227 39.711 78.673 44.1344 77.0596 46.2773C75.0224 48.9868 71.0567 50.3344 67.8709 49.221C66.9538 48.8993 66.1399 48.2791 65.2976 47.809C64.8418 48.4757 64.3538 49.3067 63.7502 50.0431C63.309 50.5725 62.7888 51.0301 62.208 51.3996C60.9917 52.1789 59.5885 51.8715 58.7248 50.7115C57.9733 49.6999 57.6564 48.5168 57.4355 47.3014C57.3839 47.0191 57.334 46.7367 57.2699 46.3739C56.7143 47.7214 56.2015 48.9958 55.6672 50.254C55.133 51.5122 54.4439 52.6364 53.3985 53.5211C51.8511 54.8312 50.1753 54.6346 49.1959 52.8723C48.6332 51.8589 48.3554 50.6829 47.969 49.573C47.8764 49.3103 47.8603 49.0208 47.7179 48.7455C47.4739 49.7625 47.2531 50.7848 46.9771 51.7839C46.5924 53.1905 46.0742 54.5416 45.1589 55.7033C43.8002 57.4262 42.0764 57.3941 40.8227 55.58C39.6742 53.9214 39.3002 51.9894 39.0135 50.0395C39.0078 49.9322 38.9636 49.8306 38.8888 49.7536C38.7517 50.2272 38.6164 50.7026 38.4757 51.1834C37.6316 54.0054 36.5168 56.6971 34.6096 58.9812C33.3524 60.4807 31.7889 61.4833 29.8585 61.8783C27.1464 62.4252 25.1074 61.1384 23.3196 59.3422C21.4088 57.4245 20.2655 55.0134 19.352 52.5077C16.6808 45.1907 16.9818 37.997 20.4935 31.0231C22.5877 26.8606 26.1118 24.555 30.6118 23.7168C32.9749 23.2753 35.1884 24.5139 36.0431 26.9482C37.5283 31.1804 36.7074 35.1034 33.9205 38.5564C33.3364 39.2713 32.3498 39.6824 31.52 40.1864C31.1639 40.408 30.7525 40.4026 30.4515 40.0076C30.1506 39.6127 30.4515 39.3607 30.6724 39.0818C31.6447 37.8504 32.0168 36.401 32.259 34.8764C32.5582 33.0052 32.6276 31.1464 32.2234 29.2859C32.1667 29.0247 32.0935 28.7674 32.0044 28.5156C31.561 27.2645 30.8451 27.0107 29.8674 27.9311C29.1219 28.6311 28.4824 29.4368 27.9691 30.3225C25.4476 34.7495 24.502 39.5018 25.1965 44.5759C25.4974 46.7813 25.9515 48.9243 27.1055 50.867C29.1729 54.3468 32.154 54.7757 35.1029 52.0019C36.4029 50.7777 37.3253 49.2817 38.173 47.7286C38.3279 47.4498 38.5861 47.2299 38.7677 46.9619C38.8834 46.8162 38.954 46.6398 38.9707 46.4543C38.8781 43.7108 38.7927 40.9656 38.6395 38.2329C38.6057 37.6163 38.7214 37.3768 39.334 37.2499C41.1647 36.8585 42.9739 36.4099 44.8206 35.9809ZM70.3069 39.0765L70.4654 39.2284C70.3678 39.4213 70.2578 39.6075 70.136 39.786C69.4415 40.6797 69.2153 41.6573 69.5519 42.735C69.8618 43.7216 70.8857 44.0451 71.7458 43.4678C72.0356 43.2802 72.2841 43.035 72.4759 42.7474C72.6677 42.4597 72.7988 42.1357 72.861 41.7952C72.9233 41.4548 72.9153 41.1052 72.8378 40.7679C72.7602 40.4306 72.6147 40.1129 72.41 39.8343C71.4484 38.5332 70.4387 37.2696 69.4166 35.9452C69.0266 37.1373 68.6312 38.3419 68.1985 39.6609L70.3069 39.0765Z" fill="#FF5F1B" />
                                <path d="M87.7268 30.6443C87.1926 32.5817 86.58 34.6281 86.0903 36.7031C85.898 37.6434 85.8185 38.6034 85.8535 39.5627C85.8535 40.4903 86.4162 40.7351 87.1891 40.2079C87.5146 39.9755 87.8075 39.7002 88.0598 39.3893C90.0401 37.0659 91.2937 34.394 91.6944 31.3467C91.7389 31.0196 91.7995 30.6926 91.8618 30.3101H98.2334L97.7276 31.3664C98.0322 31.2037 98.212 31.1161 98.3848 31.0089C99.8307 30.185 101.368 29.8543 103.004 30.2314C104.728 30.6264 105.506 31.8203 105.141 33.5611C104.926 34.5852 104.553 35.5736 104.313 36.5994C104.16 37.2505 104.069 37.9148 104.042 38.5833C104.012 39.3179 104.398 39.5699 105.068 39.2714C105.501 39.1005 105.894 38.8398 106.22 38.5064C107.039 37.5753 107.905 36.6548 108.535 35.6021C110.695 32.0276 114.645 30.2154 118.698 31.0858C119.305 31.2212 119.883 31.4632 120.406 31.8007C121.576 32.5549 121.798 33.7845 121.008 34.9355C120.071 36.2992 118.716 37.1392 117.17 37.5592C115.9 37.9041 114.563 38.0006 113.17 38.2223C112.992 38.7334 113.197 39.434 113.831 39.9291C114.62 40.5457 115.525 40.6869 116.483 40.4653C118.442 40.031 119.888 38.7799 121.269 37.4412C121.982 36.7478 122.626 35.9721 123.447 35.0731C123.31 35.8095 123.328 36.4332 123.08 36.9247C121.709 39.661 119.825 41.9791 117.264 43.6877C116.406 44.2721 115.44 44.6796 114.423 44.8867C113.406 45.0938 112.358 45.0963 111.34 44.8941C110.402 44.7344 109.536 44.2869 108.861 43.6132C108.187 42.9395 107.737 42.0727 107.574 41.1319C107.524 40.871 107.484 40.6065 107.413 40.1865C107.218 40.463 107.009 40.7291 106.786 40.9836C105.54 42.2454 104.347 43.5787 102.995 44.7189C102.374 45.2444 101.455 45.5178 100.629 45.6698C99.2466 45.9218 98.3491 45.2301 98.269 43.8092C98.2033 42.4959 98.263 41.1792 98.4471 39.8773C98.6661 38.2687 99.0668 36.6816 99.3499 35.0767C99.4407 34.5637 99.5565 33.9257 98.9635 33.6469C98.3705 33.3681 97.8274 33.688 97.4926 34.1509C96.8889 34.9891 96.1499 35.8291 95.8739 36.7871C95.0226 39.7396 94.3638 42.7494 93.6319 45.7359C93.5998 45.8628 93.5767 45.9915 93.5428 46.1523L87.6449 46.8261C88.1792 45.0389 88.6956 43.3088 89.2138 41.5734L89.1087 41.534C88.546 42.3866 88.0403 43.2856 87.4081 44.0755C86.6733 44.9651 85.8835 45.8074 85.0432 46.5974C84.6852 46.8982 84.2754 47.1308 83.8341 47.2837C82.4611 47.8466 81.1202 47.3927 80.4079 46.0933C79.5175 44.4848 79.4124 42.6976 79.6849 40.9407C79.9841 39.0069 80.5343 37.1124 80.9047 35.1857C81.1487 33.9186 81.2609 32.6246 81.4514 31.3467C81.4817 31.168 81.6651 30.8498 81.788 30.8445C83.8216 30.7497 85.857 30.6908 87.7268 30.6443ZM113.666 36.6137C115.431 36.4117 117.056 35.5466 118.212 34.192C118.47 33.8971 118.52 33.4163 118.664 33.0196C118.224 33.0017 117.722 32.8408 117.354 32.991C115.662 33.6916 114.547 35.0356 113.666 36.6137Z" fill="#FF5F1B" />
                                <path d="M11.4988 30.6732C11.3349 30.893 11.2263 31.0306 11.1248 31.1754C8.37351 35.127 3.60638 34.9411 1.12755 30.7983C-0.286381 28.4355 -0.232952 25.9727 0.532779 23.4383C1.50941 20.1738 3.29759 17.2123 5.72905 14.8327C5.88578 14.7018 5.99976 14.5268 6.05627 14.3302C6.11279 14.1336 6.10922 13.9245 6.04604 13.7299C5.3177 10.4289 6.12795 7.45847 8.40734 5.04925C12.4853 0.741959 17.4625 -0.94164 23.3106 0.5114C25.9426 1.16554 28.0297 2.7133 29.5166 4.96345C30.3531 6.19675 31.0298 7.53183 31.5306 8.93653C32.421 11.5209 31.609 13.8265 29.4329 15.4493C28.9182 15.8335 28.8435 16.141 29.091 16.7004C29.4293 17.4742 29.6822 18.2875 29.9493 19.0917C30.2877 20.1051 30.0419 20.6359 29.0839 21.0774C25.3211 22.8039 21.918 25.0272 19.2896 28.3122C18.1146 29.7503 17.2777 31.4358 16.8411 33.2432C16.6844 33.917 16.3068 34.4478 15.607 34.6015C14.9071 34.7552 14.4833 34.2852 14.1076 33.7973C13.5484 33.0824 13.0391 32.3192 12.4622 31.6061C12.1616 31.2744 11.8398 30.9628 11.4988 30.6732ZM20.5807 15.3027C20.3688 15.3456 20.1586 15.3867 19.9485 15.4332C16.5383 16.2125 14.2981 18.2928 13.1976 21.6118C13.1017 21.8832 13.0647 22.172 13.089 22.4589C13.3668 24.7823 13.016 26.9932 12.1986 29.1593C12.1678 29.2737 12.1645 29.3938 12.189 29.5097C12.2135 29.6255 12.265 29.734 12.3393 29.826C12.905 30.3278 13.5114 30.7816 14.1521 31.1825C15.2473 31.8402 15.9542 31.5686 16.4671 30.3783C18.6254 25.4186 22.2047 21.9674 27.2728 20.0908C28.5193 19.6261 28.8257 18.7968 28.181 17.6155C28.0505 17.3817 27.9016 17.1588 27.7358 16.9488C26.8769 15.8044 26.2754 14.4867 25.9729 13.0865C25.9011 12.6924 25.8523 12.2943 25.8268 11.8944C26.1702 12.2411 26.5323 12.5687 26.9113 12.8756C27.1321 13.0545 27.4075 13.1517 27.6913 13.1509C29.0696 12.9722 29.7 12.2144 29.5469 10.8042C29.3527 9.02946 28.7188 7.39412 27.3993 6.15734C26.2221 5.03842 24.9644 4.00796 23.6365 3.07432C20.9831 1.24417 18.1481 0.98502 15.1654 2.32904C11.2388 4.09842 8.57651 6.88476 7.82324 11.2653C7.72708 11.8158 7.68612 12.3752 7.60243 13.0722L9.76785 11.5835C9.76196 11.7407 9.69856 11.8902 9.58977 12.0035C6.70671 15.7174 4.38635 19.728 3.18967 24.3212C2.72667 26.1085 2.43998 27.919 2.97777 29.7402C3.62241 31.9153 5.48509 32.6945 7.48846 31.6454C9.02882 30.8412 9.95482 29.5007 10.5834 27.9261C11.4738 25.6813 11.5771 23.3222 11.5433 20.9451C11.5308 20.0658 11.5433 19.1847 11.5433 18.216L12.2075 19.4224C13.454 18.35 14.6222 17.2187 15.9293 16.2875C17.3094 15.3206 18.8854 14.9203 20.5807 15.301V15.3027Z" fill="black" />
                                <path d="M28.0588 66.1159C28.3295 66.0033 28.593 65.8835 28.8708 65.7763C38.3499 62.0338 48.039 58.9365 57.8689 56.2681C66.7318 53.8624 75.7051 51.9483 84.7585 50.3952C92.6948 49.0291 100.757 48.5419 108.799 48.9421C112.232 49.1208 115.648 49.6105 119.072 49.9644C119.273 50.0003 119.471 50.0511 119.665 50.1163L119.653 50.2951C119.181 50.3362 118.711 50.3934 118.241 50.413C110.464 50.7365 102.705 51.3067 94.9783 52.2378C87.6986 53.1172 80.4081 53.9447 73.1692 55.0974C63.5762 56.6255 54.115 58.8274 44.7464 61.419C39.3738 62.906 34.0618 64.577 28.7088 66.1659C28.5182 66.2213 28.3223 66.2624 28.1282 66.3107L28.0588 66.1159Z" fill="black" />
                                <path d="M89.7297 23.0061C89.6478 25.0722 89.0655 26.9953 87.4646 28.4859C85.6357 30.1909 83.1907 29.9157 81.7661 27.8478C79.8465 25.0704 80.4501 20.4253 83.0127 18.2431C84.8379 16.6882 87.1245 16.9634 88.5224 18.9097C89.395 20.109 89.6923 21.4852 89.7297 23.0061ZM87.2473 27.1043C88.0487 26.3036 88.4333 25.2867 88.5722 24.1893C88.8037 22.3627 88.5259 20.6684 87.0817 19.3476C86.0133 18.3664 83.9956 18.4683 83.0536 19.907C84.6367 19.1814 85.8708 19.3601 86.8164 20.5647C87.206 21.077 87.5026 21.6542 87.6925 22.2698C88.2143 23.9158 87.949 25.5226 87.2473 27.099V27.1043Z" fill="#FF5F1B" />
                                <path d="M63.092 24.1067C63.092 22.8557 63.0795 21.6046 63.1045 20.3535C63.1045 20.1641 63.2825 19.9782 63.384 19.7905C63.5211 19.9567 63.7616 20.114 63.7811 20.2927C64.0714 23.0219 64.3991 25.7492 64.5754 28.4873C64.7 30.4533 64.3261 34.9964 62.3476 35C61.8134 35 59.5216 35.0518 58.9873 35C57.6001 34.8749 57.5948 30.4926 57.5627 29.0896C57.5253 27.4203 57.6339 25.7439 57.7408 24.0746C57.8138 22.8503 57.9509 21.6278 58.1094 20.4107C58.1361 20.2016 58.4139 20.0264 58.5742 19.8352C58.7184 20.0407 58.982 20.2427 58.9873 20.45C59.0301 22.9522 59.0265 25.4543 59.071 27.9476C59.071 28.1263 59.3506 28.305 59.5002 28.4837C59.6213 28.2961 59.8563 28.1066 59.8563 27.9208C59.8403 25.3989 59.7833 22.8753 59.7708 20.3535C59.7708 20.1748 60.0469 19.9961 60.1947 19.8173C60.3478 20.0121 60.6292 20.2052 60.6345 20.4036C60.6969 22.8592 60.72 25.3167 60.7538 27.7724C60.7538 28.0691 60.631 28.4605 61.1331 28.4534C61.6353 28.4462 61.5071 28.0959 61.5018 27.7778C61.4572 25.2989 61.4287 22.8199 61.4287 20.341C61.4511 20.228 61.5008 20.1223 61.5735 20.0332C61.6462 19.9441 61.7396 19.8742 61.8454 19.8298C62.2016 19.728 62.3441 19.9925 62.3476 20.341C62.3779 22.8432 62.4046 25.3453 62.458 27.8475C62.458 28.0494 62.6254 28.3926 62.7661 28.4212C63.1525 28.5034 63.2095 28.2014 63.206 27.8671C63.1935 26.6161 63.206 25.365 63.206 24.1139L63.092 24.1067Z" fill="#FF5F1B" />
                            </svg>

                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="text-orange-600 transition hover:text-gray-500/75"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >
                                        History
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >
                                        Menu
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >
                                        Blog
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4 ">
                        <div className="sm:flex sm:gap-4">
                          
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>


                            <div className="hidden sm:flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>


                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;