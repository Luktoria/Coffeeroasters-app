import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
    <div className="logo-container">
      <svg width="237" height="27" viewBox="0 0 237 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.237 24.95C41.541 24.95 42.681 24.713 43.659 24.24C44.637 23.766 45.414 23.116 45.99 22.29C46.566 21.463 46.897 20.51 46.984 19.43C46.995 19.231 46.965 19.085 46.894 18.992C46.8632 18.9482 46.8233 18.9115 46.7771 18.8844C46.7308 18.8573 46.6793 18.8404 46.626 18.835C46.5322 18.8364 46.4399 18.8589 46.356 18.901C46.264 18.945 46.136 19.044 45.974 19.198C45.68 19.76 45.262 20.16 44.719 20.397C44.175 20.634 43.502 20.752 42.698 20.752C41.894 20.752 41.177 20.542 40.546 20.124C39.916 19.705 39.419 19.077 39.055 18.24C38.691 17.402 38.509 16.366 38.509 15.132C38.509 14.272 38.588 13.551 38.745 12.967C38.903 12.383 39.125 11.945 39.414 11.653C39.701 11.361 40.024 11.215 40.384 11.215C40.742 11.215 41.019 11.353 41.214 11.628C41.41 11.904 41.508 12.311 41.508 12.851V13.909C41.508 14.802 41.738 15.504 42.201 16.017C42.662 16.529 43.339 16.785 44.23 16.785C45.1 16.785 45.786 16.535 46.292 16.033C46.797 15.532 47.049 14.84 47.049 13.959C47.049 13.121 46.808 12.364 46.324 11.686C45.841 11.008 45.14 10.471 44.222 10.074C43.303 9.678 42.176 9.479 40.84 9.479C39.275 9.479 37.906 9.829 36.732 10.529C35.5729 11.214 34.6233 12.203 33.986 13.389C33.33 14.594 33 15.963 33 17.495C33 19.082 33.315 20.429 33.945 21.536C34.5441 22.6128 35.4414 23.4937 36.529 24.073C37.621 24.657 38.857 24.949 40.237 24.949V24.95ZM55.965 24.917C57.584 24.917 59.005 24.581 60.227 23.909C61.449 23.237 62.406 22.325 63.096 21.174C63.786 20.022 64.13 18.719 64.13 17.264C64.13 15.733 63.8 14.383 63.136 13.214C62.4864 12.0594 61.527 11.1093 60.366 10.471C59.181 9.81 57.796 9.479 56.209 9.479C54.612 9.479 53.199 9.821 51.972 10.504C50.744 11.187 49.782 12.11 49.087 13.273C48.391 14.435 48.044 15.743 48.044 17.198C48.044 18.719 48.375 20.058 49.038 21.215C49.6919 22.3633 50.6547 23.3053 51.817 23.934C53.007 24.59 54.389 24.917 55.965 24.917ZM57.204 23.198C56.867 23.264 56.538 23.116 56.217 22.752C55.897 22.388 55.593 21.777 55.305 20.917C55.017 20.057 54.742 18.928 54.482 17.529C54.232 16.129 54.09 14.978 54.058 14.074C54.025 13.171 54.09 12.488 54.253 12.024C54.416 11.562 54.666 11.292 55.003 11.214C55.34 11.149 55.669 11.298 55.989 11.661C56.309 12.025 56.617 12.636 56.91 13.496C57.204 14.356 57.48 15.485 57.741 16.884C58.002 18.284 58.146 19.438 58.173 20.347C58.2 21.257 58.13 21.942 57.961 22.405C57.793 22.868 57.541 23.132 57.204 23.198ZM74.985 24.62C75.496 24.62 75.751 24.366 75.751 23.86C75.751 23.64 75.691 23.466 75.572 23.339C75.452 23.212 75.268 23.132 75.018 23.099L73.616 22.884C73.5231 22.8736 73.434 22.8412 73.3561 22.7896C73.2782 22.7379 73.2138 22.6685 73.168 22.587C73.076 22.421 73.03 22.185 73.03 21.876V11.579H74.187C74.795 11.579 75.241 11.474 75.523 11.264C75.806 11.055 75.947 10.785 75.947 10.454C75.947 10.234 75.879 10.072 75.743 9.967C75.607 9.862 75.415 9.81 75.165 9.81H72.75L72.735 9.723C72.6849 9.49593 72.5956 9.27935 72.471 9.083L72.401 8.975C72.131 8.5865 71.8282 8.22183 71.496 7.885C71.1295 7.5067 70.771 7.12062 70.421 6.727C70.0679 6.33295 69.764 5.89742 69.516 5.43C69.2726 4.97196 69.1465 4.46071 69.149 3.942C69.149 3.424 69.253 3.028 69.459 2.752C69.666 2.477 69.969 2.339 70.372 2.339C70.687 2.339 70.921 2.429 71.072 2.612C71.225 2.793 71.301 3.077 71.301 3.462V4.934C71.301 5.771 71.54 6.444 72.018 6.95C72.496 7.457 73.126 7.71 73.908 7.71C74.615 7.71 75.194 7.493 75.644 7.058C76.095 6.623 76.321 5.97 76.321 5.099C76.321 4.361 76.131 3.68 75.751 3.058C75.371 2.435 74.797 1.937 74.031 1.562C73.265 1.187 72.302 1 71.139 1C69.335 1 67.944 1.433 66.966 2.298C65.989 3.163 65.5 4.317 65.5 5.76C65.5 6.366 65.581 6.876 65.744 7.29C65.907 7.702 66.092 8.058 66.298 8.355L66.852 9.157C66.975 9.335 67.051 9.52 67.082 9.713L67.092 9.81H65.662C65.4814 9.80172 65.303 9.85263 65.154 9.955L65.1 10C65.0332 10.0621 64.9805 10.1378 64.9455 10.222C64.9105 10.3061 64.8939 10.3969 64.897 10.488C64.897 10.686 64.951 10.854 65.059 10.992C65.169 11.129 65.347 11.259 65.597 11.38L66.543 11.694C66.749 11.782 66.89 11.879 66.966 11.984C67.0451 12.0976 67.0854 12.2337 67.081 12.372V21.926C67.081 22.212 67.031 22.433 66.934 22.586C66.8408 22.7371 66.6958 22.8491 66.526 22.901L65.826 23.116C65.6577 23.1738 65.5083 23.2765 65.394 23.413C65.2956 23.5531 65.2467 23.722 65.255 23.893C65.255 24.124 65.323 24.303 65.459 24.43C65.595 24.556 65.771 24.62 65.989 24.62H74.985ZM86.362 24.62C86.872 24.62 87.128 24.366 87.128 23.86C87.128 23.64 87.068 23.466 86.948 23.339C86.829 23.212 86.644 23.132 86.394 23.099L84.993 22.884C84.9001 22.8736 84.811 22.8412 84.7331 22.7896C84.6552 22.7379 84.5908 22.6685 84.545 22.587C84.452 22.421 84.406 22.185 84.406 21.876V11.579H85.563C86.172 11.579 86.617 11.474 86.9 11.264C87.182 11.055 87.323 10.785 87.323 10.454C87.323 10.234 87.256 10.072 87.12 9.967C86.984 9.862 86.791 9.81 86.541 9.81H84.127L84.112 9.723C84.0619 9.49593 83.9726 9.27935 83.848 9.083L83.778 8.975C83.5083 8.58654 83.2059 8.22187 82.874 7.885C82.5071 7.50672 82.1484 7.12063 81.798 6.727C81.4452 6.3329 81.1417 5.89737 80.894 5.43C80.6506 4.97196 80.5245 4.46071 80.527 3.942C80.527 3.424 80.63 3.028 80.837 2.752C81.043 2.477 81.347 2.339 81.749 2.339C82.064 2.339 82.299 2.429 82.45 2.612C82.602 2.793 82.678 3.077 82.678 3.462V4.934C82.678 5.771 82.918 6.444 83.396 6.95C83.874 7.457 84.504 7.71 85.286 7.71C85.992 7.71 86.571 7.493 87.022 7.058C87.472 6.623 87.698 5.97 87.698 5.099C87.698 4.361 87.508 3.68 87.128 3.058C86.748 2.435 86.174 1.937 85.408 1.562C84.642 1.187 83.678 1 82.515 1C80.712 1 79.321 1.433 78.343 2.298C77.365 3.163 76.876 4.317 76.876 5.76C76.876 6.366 76.958 6.876 77.121 7.29C77.284 7.702 77.468 8.058 77.675 8.355L78.229 9.157C78.351 9.335 78.427 9.52 78.458 9.713L78.469 9.81H77.039C76.8581 9.8015 76.6793 9.85242 76.53 9.955L76.477 10C76.41 10.062 76.3571 10.1376 76.322 10.2218C76.2868 10.306 76.2701 10.3968 76.273 10.488C76.273 10.686 76.327 10.854 76.436 10.992C76.545 11.129 76.724 11.259 76.974 11.38L77.919 11.694C78.126 11.782 78.267 11.879 78.343 11.984C78.4217 12.0977 78.4617 12.2338 78.457 12.372V21.926C78.457 22.212 78.408 22.433 78.31 22.586C78.2171 22.7369 78.0724 22.8489 77.903 22.901L77.202 23.116C77.0337 23.1738 76.8843 23.2765 76.77 23.413C76.6719 23.5532 76.6234 23.7221 76.632 23.893C76.632 24.124 76.699 24.303 76.835 24.43C76.971 24.556 77.148 24.62 77.365 24.62H86.362ZM95.472 24.95C96.852 24.95 98.07 24.68 99.124 24.14C100.178 23.6 100.998 22.882 101.584 21.983C102.172 21.085 102.465 20.096 102.465 19.017C102.465 18.807 102.427 18.658 102.351 18.57C102.318 18.5286 102.276 18.4952 102.228 18.4723C102.18 18.4495 102.127 18.4377 102.074 18.438C101.98 18.4424 101.887 18.4677 101.804 18.512C101.702 18.562 101.584 18.658 101.454 18.802C101.226 19.507 100.778 20.058 100.11 20.455C99.442 20.851 98.673 21.05 97.804 21.05C96.445 21.05 95.359 20.584 94.544 19.653C94.066 19.107 93.728 18.38 93.531 17.473L93.515 17.397H100.965C101.437 17.397 101.806 17.272 102.075 17.023L102.139 16.959C102.411 16.667 102.546 16.267 102.546 15.76C102.546 14.592 102.272 13.532 101.723 12.579C101.175 11.625 100.39 10.871 99.368 10.314C98.347 9.758 97.13 9.479 95.718 9.479C94.055 9.479 92.631 9.809 91.447 10.471C90.2886 11.1056 89.3442 12.0691 88.733 13.24C88.109 14.424 87.796 15.804 87.796 17.38C87.796 18.879 88.119 20.198 88.766 21.339C89.3957 22.4629 90.3307 23.3855 91.463 24C92.615 24.634 93.951 24.95 95.472 24.95ZM93.345 16.072C93.329 15.8086 93.3209 15.5448 93.321 15.281C93.321 14.245 93.397 13.43 93.55 12.835C93.702 12.24 93.897 11.818 94.136 11.57C94.376 11.322 94.642 11.198 94.935 11.198C95.315 11.198 95.671 11.523 96.003 12.174C96.333 12.824 96.5 13.904 96.5 15.414C96.5 15.876 96.293 16.107 95.88 16.107H93.347L93.345 16.072ZM111.055 24.95C112.435 24.95 113.651 24.68 114.705 24.14C115.759 23.6 116.58 22.882 117.166 21.983C117.753 21.085 118.046 20.096 118.046 19.017C118.046 18.807 118.008 18.658 117.932 18.57C117.899 18.5286 117.857 18.4952 117.809 18.4723C117.761 18.4495 117.708 18.4377 117.655 18.438C117.561 18.4426 117.469 18.4679 117.386 18.512C117.283 18.562 117.166 18.658 117.036 18.802C116.808 19.507 116.36 20.058 115.691 20.455C115.023 20.851 114.254 21.05 113.385 21.05C112.027 21.05 110.94 20.584 110.125 19.653C109.648 19.107 109.31 18.38 109.112 17.473L109.096 17.397H116.547C117.018 17.397 117.388 17.272 117.656 17.023L117.721 16.959C117.992 16.667 118.128 16.267 118.128 15.76C118.128 14.592 117.854 13.532 117.305 12.579C116.756 11.625 115.971 10.871 114.95 10.314C113.928 9.758 112.711 9.479 111.299 9.479C109.636 9.479 108.213 9.809 107.029 10.471C105.871 11.1056 104.926 12.0691 104.315 13.24C103.69 14.424 103.378 15.804 103.378 17.38C103.378 18.879 103.701 20.198 104.348 21.339C104.977 22.4628 105.912 23.3853 107.044 24C108.196 24.634 109.533 24.95 111.055 24.95ZM108.926 16.072C108.91 15.8086 108.903 15.5448 108.903 15.281C108.903 14.245 108.979 13.43 109.131 12.835C109.283 12.24 109.479 11.818 109.718 11.57C109.957 11.322 110.223 11.198 110.516 11.198C110.896 11.198 111.253 11.523 111.584 12.174C111.915 12.824 112.081 13.904 112.081 15.414C112.081 15.876 111.875 16.107 111.461 16.107H108.928L108.926 16.072ZM128.005 24.62C128.265 24.62 128.465 24.551 128.6 24.413C128.668 24.3419 128.722 24.2576 128.757 24.1653C128.792 24.0731 128.808 23.9746 128.804 23.876C128.808 23.7018 128.757 23.5309 128.657 23.388C128.559 23.251 128.397 23.165 128.168 23.132L126.946 22.884C126.849 22.8661 126.757 22.8262 126.678 22.7674C126.599 22.7087 126.534 22.6326 126.489 22.545C126.391 22.364 126.343 22.118 126.343 21.81V15.992C126.343 15.342 126.381 14.807 126.457 14.388C126.533 13.97 126.644 13.658 126.791 13.455C126.937 13.251 127.109 13.149 127.304 13.149C127.5 13.149 127.641 13.22 127.728 13.364C127.815 13.507 127.864 13.705 127.875 13.959L127.891 14.619C127.913 15.369 128.116 15.948 128.502 16.355C128.888 16.763 129.482 16.967 130.287 16.967C131.113 16.967 131.787 16.669 132.307 16.074C132.829 15.479 133.09 14.548 133.09 13.281C133.09 12.003 132.84 11.05 132.34 10.421C131.84 9.793 131.123 9.479 130.189 9.479C129.418 9.479 128.706 9.719 128.054 10.199C127.402 10.678 126.878 11.41 126.481 12.397C126.413 12.5661 126.352 12.7379 126.299 12.912L126.271 13.006L126.147 10.438C126.118 10.134 126.065 9.913 125.989 9.775L125.959 9.727C125.867 9.595 125.729 9.529 125.544 9.529C125.414 9.529 125.256 9.551 125.071 9.595C124.838 9.65525 124.609 9.73245 124.387 9.826L119.757 11.166C119.497 11.264 119.312 11.383 119.204 11.521C119.097 11.6542 119.039 11.8202 119.041 11.991C119.035 12.1257 119.073 12.2587 119.147 12.371C119.217 12.471 119.329 12.565 119.481 12.653L119.905 12.703C120.033 12.7572 120.139 12.853 120.206 12.975C120.266 13.091 120.296 13.281 120.296 13.545V21.942C120.296 22.272 120.269 22.51 120.214 22.652C120.189 22.7214 120.15 22.7851 120.099 22.8392C120.049 22.8933 119.988 22.9368 119.921 22.967L119.546 23.116C119.405 23.215 119.293 23.322 119.212 23.438C119.127 23.5677 119.084 23.7208 119.09 23.876C119.09 24.107 119.158 24.289 119.293 24.421C119.429 24.554 119.617 24.62 119.856 24.62H128.005ZM141.631 24.917C143.25 24.917 144.671 24.581 145.893 23.909C147.115 23.237 148.071 22.325 148.761 21.174C149.451 20.022 149.796 18.719 149.796 17.264C149.796 15.733 149.465 14.383 148.802 13.214C148.152 12.0594 147.193 11.1093 146.032 10.471C144.847 9.81 143.462 9.479 141.875 9.479C140.278 9.479 138.865 9.821 137.637 10.504C136.41 11.187 135.448 12.11 134.753 13.273C134.057 14.435 133.71 15.743 133.71 17.198C133.71 18.719 134.04 20.058 134.704 21.215C135.358 22.3633 136.321 23.3053 137.483 23.934C138.673 24.59 140.055 24.917 141.631 24.917ZM142.869 23.198C142.533 23.264 142.204 23.116 141.883 22.752C141.563 22.388 141.259 21.777 140.971 20.917C140.683 20.057 140.408 18.928 140.147 17.529C139.897 16.129 139.757 14.978 139.724 14.074C139.691 13.171 139.756 12.488 139.919 12.024C140.082 11.562 140.332 11.292 140.669 11.214C141.006 11.149 141.335 11.298 141.655 11.661C141.975 12.025 142.283 12.636 142.576 13.496C142.869 14.356 143.146 15.485 143.407 16.884C143.668 18.284 143.812 19.438 143.839 20.347C143.866 21.257 143.796 21.942 143.627 22.405C143.459 22.868 143.207 23.132 142.869 23.198ZM162.721 24.95C163.634 24.95 164.384 24.782 164.971 24.446C165.557 24.11 165.994 23.711 166.282 23.248C166.57 22.785 166.714 22.361 166.714 21.975C166.719 21.83 166.682 21.6865 166.608 21.562C166.58 21.5115 166.538 21.4696 166.488 21.4406C166.438 21.4116 166.381 21.3965 166.323 21.397C166.272 21.3961 166.222 21.4075 166.176 21.43C166.131 21.4536 166.092 21.4875 166.062 21.529C166.008 21.727 165.924 21.865 165.81 21.942C165.702 22.0172 165.574 22.0577 165.443 22.058C165.258 22.058 165.12 21.994 165.027 21.868C164.935 21.741 164.889 21.573 164.889 21.364V14.058C164.889 12.603 164.397 11.477 163.414 10.678C162.43 9.878 160.89 9.479 158.794 9.479C157.164 9.479 155.802 9.683 154.71 10.091C153.618 10.499 152.798 11.019 152.25 11.653C151.7 12.287 151.426 12.933 151.426 13.595C151.426 14.3 151.63 14.837 152.037 15.207C152.445 15.576 153.034 15.76 153.806 15.76C154.751 15.76 155.496 15.504 156.039 14.992C156.582 14.479 156.854 13.815 156.854 13V11.744C156.854 11.435 156.949 11.196 157.139 11.024C157.329 10.854 157.565 10.769 157.848 10.769C158.152 10.769 158.394 10.882 158.573 11.107C158.753 11.333 158.843 11.639 158.843 12.025L158.842 16.843L158.755 16.824C158.455 16.7696 158.15 16.7405 157.845 16.737L157.669 16.736C155.332 16.736 153.591 17.132 152.445 17.926C151.299 18.719 150.725 19.826 150.725 21.248C150.725 22.328 151.119 23.215 151.907 23.909C152.695 24.603 153.741 24.95 155.044 24.95C156.022 24.95 156.935 24.75 157.783 24.347C158.418 24.045 158.935 23.649 159.333 23.159L159.355 23.129L159.379 23.204C159.504 23.561 159.733 23.881 160.067 24.164L160.17 24.248C160.773 24.716 161.624 24.95 162.721 24.95ZM158.158 22.372C157.723 22.372 157.372 22.192 157.106 21.835C156.84 21.477 156.706 20.928 156.706 20.19C156.706 19.419 156.835 18.835 157.09 18.438C157.345 18.041 157.685 17.843 158.109 17.843C158.359 17.843 158.576 17.868 158.761 17.917L158.841 17.942V22.184L158.789 22.214C158.615 22.304 158.436 22.356 158.251 22.369L158.158 22.372ZM174.212 25C176.146 25 177.629 24.554 178.662 23.661C179.694 22.769 180.21 21.551 180.21 20.008C180.21 19.072 180.036 18.251 179.688 17.545C179.34 16.84 178.732 16.215 177.863 15.669C176.993 15.124 175.771 14.609 174.195 14.124C173.609 13.937 173.155 13.747 172.835 13.554C172.514 13.361 172.294 13.154 172.175 12.934C172.055 12.714 171.995 12.477 171.995 12.224C171.995 11.848 172.131 11.545 172.403 11.314C172.674 11.083 173.076 10.967 173.609 10.967C174.348 10.967 175.046 11.215 175.703 11.711C176.36 12.207 177.086 13.055 177.879 14.256C178.085 14.51 178.292 14.694 178.499 14.81C178.705 14.926 178.9 14.961 179.085 14.917C179.192 14.89 179.289 14.8328 179.364 14.7523C179.439 14.6718 179.489 14.5714 179.509 14.463C179.563 14.226 179.552 13.887 179.476 13.446L179.052 10.405C179.009 10.085 178.927 9.86 178.808 9.727C178.748 9.66148 178.675 9.60981 178.593 9.5756C178.512 9.5414 178.424 9.52549 178.335 9.529C178.161 9.529 177.945 9.589 177.683 9.711C177.423 9.832 177.164 9.956 176.909 10.083C176.654 10.209 176.461 10.273 176.331 10.273C176.211 10.273 176.034 10.207 175.801 10.074C175.567 9.942 175.239 9.81 174.815 9.678C174.391 9.545 173.842 9.479 173.169 9.479C172.049 9.479 171.042 9.683 170.145 10.091C169.249 10.499 168.542 11.08 168.026 11.835C167.51 12.59 167.252 13.49 167.252 14.537C167.252 15.463 167.445 16.273 167.831 16.967C168.217 17.661 168.806 18.257 169.599 18.752C170.392 19.248 171.392 19.65 172.599 19.959C173.38 20.168 173.981 20.38 174.399 20.595C174.817 20.81 175.105 21.045 175.263 21.298C175.421 21.551 175.499 21.832 175.499 22.14C175.499 22.548 175.363 22.884 175.092 23.149C174.82 23.413 174.407 23.545 173.853 23.545C173.337 23.5464 172.827 23.4308 172.362 23.207C171.889 22.981 171.402 22.592 170.903 22.041C170.403 21.491 169.843 20.736 169.224 19.777C169.04 19.523 168.83 19.347 168.597 19.247C168.485 19.1978 168.363 19.1738 168.24 19.1768C168.117 19.1797 167.997 19.2095 167.887 19.264C167.66 19.353 167.513 19.54 167.447 19.826C167.383 20.113 167.399 20.466 167.497 20.884L168.002 24.174C168.078 24.504 168.187 24.724 168.328 24.834C168.469 24.944 168.621 25 168.784 25C168.969 25 169.194 24.94 169.461 24.818L170.259 24.455C170.526 24.333 170.74 24.273 170.903 24.273C171.066 24.273 171.281 24.333 171.547 24.455C171.885 24.6014 172.234 24.7228 172.59 24.818C173.02 24.939 173.56 25 174.212 25ZM187.12 24.95C188.098 24.95 188.946 24.76 189.663 24.38C190.364 24.0149 190.952 23.4664 191.366 22.793C191.784 22.116 192.032 21.331 192.108 20.438C192.118 20.185 192.083 20.017 192.002 19.934C191.967 19.8945 191.92 19.8675 191.869 19.857C191.817 19.8466 191.763 19.8532 191.716 19.876C191.586 20.074 191.45 20.273 191.309 20.471C191.168 20.669 191.019 20.848 190.861 21.008C190.703 21.168 190.527 21.298 190.331 21.397C190.136 21.496 189.924 21.545 189.695 21.545C189.163 21.545 188.758 21.347 188.481 20.95C188.204 20.554 188.066 19.942 188.066 19.116V11.579H190.51C191.065 11.579 191.48 11.483 191.754 11.293L191.814 11.248C192.086 11.028 192.222 10.763 192.222 10.455C192.222 10.235 192.157 10.072 192.026 9.967C191.896 9.862 191.711 9.81 191.472 9.81H188.065V6.85C188.065 6.556 188.01 6.332 187.898 6.178L187.854 6.123C187.712 5.969 187.517 5.892 187.267 5.892C187.034 5.89655 186.808 5.96808 186.615 6.098C186.367 6.26343 186.147 6.46694 185.963 6.701L182.948 9.231C182.763 9.461 182.616 9.616 182.508 9.693C182.419 9.7631 182.311 9.80367 182.198 9.809H181.399C181.177 9.80269 180.961 9.8826 180.796 10.032C180.716 10.1036 180.653 10.1917 180.611 10.2901C180.569 10.3886 180.549 10.495 180.552 10.602C180.552 10.79 180.579 10.947 180.633 11.073C180.688 11.2 180.807 11.308 180.992 11.396L181.758 11.644C181.932 11.721 182.041 11.82 182.084 11.941C182.127 12.062 182.149 12.239 182.149 12.471V19.941C182.149 21.671 182.565 22.938 183.396 23.743C184.227 24.547 185.469 24.949 187.12 24.949V24.95ZM200.338 24.95C201.718 24.95 202.935 24.68 203.989 24.14C205.043 23.6 205.864 22.882 206.451 21.983C207.037 21.085 207.331 20.096 207.331 19.017C207.331 18.807 207.293 18.658 207.217 18.57C207.184 18.5284 207.141 18.495 207.093 18.4721C207.045 18.4492 206.992 18.4376 206.939 18.438C206.845 18.4427 206.754 18.468 206.671 18.512C206.567 18.562 206.451 18.658 206.321 18.802C206.091 19.507 205.644 20.058 204.975 20.455C204.307 20.851 203.538 21.05 202.669 21.05C201.311 21.05 200.224 20.584 199.409 19.653C198.932 19.107 198.594 18.38 198.396 17.473L198.38 17.397H205.831C206.303 17.397 206.672 17.272 206.94 17.023L207.005 16.959C207.276 16.667 207.412 16.267 207.412 15.76C207.412 14.592 207.138 13.532 206.589 12.579C206.04 11.625 205.255 10.871 204.234 10.314C203.212 9.758 201.996 9.479 200.583 9.479C198.921 9.479 197.497 9.809 196.313 10.471C195.155 11.1056 194.21 12.0691 193.599 13.24C192.974 14.424 192.662 15.804 192.662 17.38C192.662 18.879 192.985 20.198 193.632 21.339C194.262 22.4629 195.197 23.3855 196.329 24C197.481 24.634 198.817 24.95 200.339 24.95H200.338ZM198.21 16.072C198.194 15.8086 198.187 15.5448 198.187 15.281C198.187 14.245 198.263 13.43 198.415 12.835C198.567 12.24 198.763 11.818 199.002 11.57C199.242 11.322 199.507 11.198 199.801 11.198C200.181 11.198 200.537 11.523 200.868 12.174C201.2 12.824 201.365 13.904 201.365 15.414C201.365 15.876 201.159 16.107 200.746 16.107H198.212L198.21 16.072ZM217.29 24.62C217.55 24.62 217.748 24.551 217.884 24.413C217.952 24.3419 218.006 24.2576 218.041 24.1653C218.076 24.0731 218.092 23.9746 218.088 23.876C218.092 23.7018 218.041 23.5309 217.941 23.388C217.843 23.251 217.681 23.165 217.452 23.132L216.23 22.884C216.133 22.8661 216.041 22.8262 215.962 22.7674C215.883 22.7087 215.818 22.6326 215.773 22.545C215.676 22.364 215.627 22.118 215.627 21.81V15.992C215.627 15.342 215.665 14.807 215.741 14.388C215.817 13.97 215.928 13.658 216.075 13.455C216.222 13.251 216.393 13.149 216.588 13.149C216.784 13.149 216.925 13.22 217.012 13.364C217.099 13.507 217.148 13.705 217.159 13.959L217.175 14.619C217.197 15.369 217.4 15.948 217.786 16.355C218.172 16.763 218.766 16.967 219.571 16.967C220.397 16.967 221.071 16.669 221.592 16.074C222.114 15.479 222.374 14.548 222.374 13.281C222.374 12.003 222.124 11.05 221.624 10.421C221.124 9.793 220.408 9.479 219.474 9.479C218.702 9.479 217.99 9.719 217.338 10.199C216.686 10.678 216.162 11.41 215.765 12.397C215.697 12.5661 215.636 12.7379 215.583 12.912L215.555 13.007L215.431 10.438C215.402 10.134 215.35 9.913 215.273 9.775L215.243 9.727C215.151 9.595 215.013 9.529 214.828 9.529C214.698 9.529 214.54 9.551 214.355 9.595C214.122 9.65525 213.893 9.73245 213.671 9.826L209.042 11.166C208.782 11.264 208.596 11.383 208.488 11.521C208.381 11.6542 208.323 11.8202 208.325 11.991C208.319 12.1257 208.357 12.2587 208.431 12.371C208.501 12.471 208.613 12.565 208.765 12.653L209.189 12.703C209.317 12.7572 209.423 12.853 209.49 12.975C209.55 13.091 209.58 13.281 209.58 13.545V21.942C209.58 22.272 209.553 22.51 209.498 22.652C209.473 22.7214 209.434 22.7851 209.383 22.8392C209.333 22.8933 209.272 22.9368 209.205 22.967L208.83 23.116C208.689 23.215 208.577 23.322 208.496 23.438C208.411 23.5677 208.368 23.7208 208.374 23.876C208.374 24.107 208.442 24.289 208.577 24.421C208.713 24.554 208.901 24.62 209.14 24.62H217.29ZM230.002 25C231.936 25 233.419 24.554 234.452 23.661C235.484 22.769 236 21.551 236 20.008C236 19.072 235.826 18.251 235.478 17.545C235.131 16.84 234.522 16.215 233.653 15.669C232.783 15.124 231.561 14.609 229.986 14.124C229.399 13.937 228.946 13.747 228.625 13.554C228.305 13.361 228.085 13.154 227.965 12.934C227.845 12.714 227.785 12.477 227.785 12.224C227.785 11.848 227.921 11.545 228.193 11.314C228.465 11.083 228.867 10.967 229.399 10.967C230.138 10.967 230.836 11.215 231.493 11.711C232.151 12.207 232.876 13.055 233.669 14.256C233.876 14.51 234.082 14.694 234.289 14.81C234.495 14.926 234.691 14.961 234.875 14.917C234.982 14.89 235.079 14.8328 235.154 14.7523C235.229 14.6718 235.279 14.5714 235.299 14.463C235.353 14.226 235.343 13.887 235.267 13.446L234.843 10.405C234.799 10.085 234.718 9.86 234.598 9.727C234.538 9.66161 234.465 9.61002 234.384 9.57582C234.302 9.54162 234.214 9.52564 234.126 9.529C233.952 9.529 233.734 9.589 233.474 9.711C233.213 9.832 232.954 9.956 232.7 10.083C232.444 10.209 232.251 10.273 232.12 10.273C232.001 10.273 231.825 10.207 231.591 10.074C231.358 9.942 231.029 9.81 230.605 9.678C230.181 9.545 229.633 9.479 228.959 9.479C227.839 9.479 226.832 9.683 225.936 10.091C225.039 10.499 224.333 11.08 223.816 11.835C223.301 12.59 223.043 13.49 223.043 14.537C223.043 15.463 223.235 16.273 223.621 16.967C224.007 17.661 224.596 18.257 225.39 18.752C226.183 19.248 227.182 19.65 228.389 19.959C229.171 20.168 229.771 20.38 230.189 20.595C230.608 20.81 230.896 21.045 231.053 21.298C231.211 21.551 231.29 21.832 231.29 22.14C231.29 22.548 231.154 22.884 230.882 23.149C230.611 23.413 230.198 23.545 229.644 23.545C229.128 23.5465 228.617 23.431 228.152 23.207C227.68 22.981 227.193 22.592 226.693 22.041C226.193 21.491 225.634 20.736 225.015 19.777C224.83 19.523 224.621 19.347 224.387 19.247C224.275 19.198 224.153 19.1741 224.031 19.177C223.908 19.1799 223.788 19.2096 223.678 19.264C223.45 19.353 223.303 19.54 223.238 19.826C223.173 20.113 223.189 20.466 223.287 20.884L223.792 24.174C223.868 24.504 223.977 24.724 224.118 24.834C224.26 24.944 224.412 25 224.575 25C224.759 25 224.985 24.94 225.251 24.818L226.05 24.455C226.316 24.333 226.53 24.273 226.693 24.273C226.856 24.273 227.071 24.333 227.337 24.455C227.675 24.6014 228.024 24.7228 228.38 24.818C228.81 24.939 229.35 25 230.002 25Z" fill="currentColor" />
        <path d="M23.123 11.378C26.013 14.268 25.51 19.478 21.997 22.991C20.309 24.678 18.184 25.731 16.01 25.956C15.72 25.985 15.434 26 15.154 26C13.284 26 11.615 25.344 10.385 24.114C8.96899 22.7 8.31499 20.702 8.54599 18.489C8.76999 16.316 9.82299 14.19 11.51 12.503C15.025 8.991 20.234 8.484 23.123 11.378ZM22.943 11.558C21.982 12.718 21.273 14.04 20.092 15.011C18.835 16.044 17.452 16.421 15.931 16.861C12.593 17.831 10.943 20.652 10.562 23.936C11.605 22.683 12.37 21.279 13.687 20.273C14.839 19.393 16.085 19.046 17.441 18.675C20.852 17.739 22.546 14.894 22.943 11.558ZM14.49 5.003C15.3971 5.91305 16.1308 6.98084 16.655 8.154C14.975 8.444 13.347 9.146 11.905 10.2C11.3354 9.83472 10.7169 9.55191 10.068 9.36C8.54899 8.92 7.16499 8.544 5.90799 7.51C4.72799 6.539 4.01899 5.214 3.05599 4.056C3.45199 7.392 5.14699 10.238 8.55799 11.174C9.13399 11.331 9.68599 11.494 10.224 11.685C8.59799 13.398 7.52799 15.485 7.15399 17.655C5.98021 17.1308 4.91151 16.3975 3.99999 15.491C0.491993 11.978 -0.014007 6.768 2.87699 3.878C5.76599 0.986003 10.976 1.49 14.49 5.003Z" fill="#0E8784" />
      </svg>
      </div>

      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/createplan">Create your plan</Link>
        </li>
      </ul>

      <ul className="social-media">
        <li>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_6)">
              <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_3_6">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </li>

            <li>
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2.557C23.1014 2.95527 22.1481 3.21651 21.172 3.332C22.2006 2.71718 22.9702 1.74887 23.337 0.607998C22.3704 1.18158 21.3128 1.58573 20.21 1.803C19.7494 1.31139 19.1928 0.919687 18.5745 0.652192C17.9563 0.384696 17.2896 0.247119 16.616 0.247998C13.437 0.247998 11.101 3.214 11.819 6.293C9.86138 6.19501 7.94625 5.6864 6.19796 4.80019C4.44967 3.91399 2.9073 2.67 1.671 1.149C1.04148 2.23304 0.848566 3.51618 1.13149 4.7374C1.41441 5.95863 2.15192 7.02621 3.194 7.723C2.41251 7.69833 1.64826 7.48712 0.965 7.107C0.911 9.388 2.546 11.522 4.914 11.997C4.18873 12.194 3.42806 12.2227 2.69 12.081C3.00451 13.0594 3.61703 13.915 4.44184 14.528C5.26665 15.1411 6.26249 15.4809 7.29 15.5C5.2262 17.1189 2.6043 17.8526 0 17.54C2.25151 18.9866 4.87183 19.7545 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.106C22.5067 4.40882 23.3387 3.5457 24 2.557Z" fill="currentColor" />
          </svg>
        </li>
        
        <li>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_8)">
              <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C11.1908 5.838 10.3895 5.99739 9.6419 6.30705C8.8943 6.61672 8.215 7.07061 7.64281 7.64281C7.07061 8.215 6.61672 8.8943 6.30705 9.6419C5.99738 10.3895 5.838 11.1908 5.838 12C5.838 12.8092 5.99738 13.6105 6.30705 14.3581C6.61672 15.1057 7.07061 15.785 7.64281 16.3572C8.215 16.9294 8.8943 17.3833 9.6419 17.6929C10.3895 18.0026 11.1908 18.162 12 18.162C13.6343 18.162 15.2016 17.5128 16.3572 16.3572C17.5128 15.2016 18.162 13.6343 18.162 12C18.162 10.3657 17.5128 8.79841 16.3572 7.64281C15.2016 6.48721 13.6343 5.838 12 5.838ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM18.406 4.155C18.2168 4.155 18.0295 4.19226 17.8547 4.26465C17.68 4.33704 17.5212 4.44315 17.3874 4.57691C17.2537 4.71068 17.1475 4.86947 17.0752 5.04424C17.0028 5.21901 16.9655 5.40633 16.9655 5.5955C16.9655 5.78467 17.0028 5.97199 17.0752 6.14676C17.1475 6.32153 17.2537 6.48032 17.3874 6.61409C17.5212 6.74785 17.68 6.85396 17.8547 6.92635C18.0295 6.99874 18.2168 7.036 18.406 7.036C18.788 7.036 19.1544 6.88423 19.4246 6.61409C19.6947 6.34394 19.8465 5.97754 19.8465 5.5955C19.8465 5.21346 19.6947 4.84706 19.4246 4.57691C19.1544 4.30677 18.788 4.155 18.406 4.155Z" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_3_8">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </li>

    

      </ul>

    </footer>
  );
};

export default Footer;