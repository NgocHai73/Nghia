import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BottomTab from "../../more/BottomTab";
import MetaData from "../../more/Metadata";
import StoreIcon from "@material-ui/icons/Shop";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Support from "@material-ui/icons/ReportProblem";
import QuestionMarkIcon from "@material-ui/icons/Cached";
import Update from "@material-ui/icons/DynamicFeedOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../../actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoreOption = ({ history }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    history.push("/login");
    toast.success("Logout Successfully");
  }

  return (
    <>
      <MetaData title="Tùy chọn" />
      <div
        className="moreOption"
        style={{
          display: "flex",
          padding: "10px",
          flexDirection: "column",
          marginBottom: "10vh",
        }}
      >
        {isAuthenticated && (
          <Link to="/me">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid rgb(0 0 0 / 25%)",
                padding: "4px 0",
                width: "100%",
              }}
            >
              <img
                src={user.avatar ? user.avatar.url : "/profile.png"}
                alt={user.name}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "#000",
                  }}
                >
                  {user.name}
                </span>
                <span
                  style={{
                    color: "#000",
                    opacity: "0.6",
                    fontSize: "14px",
                  }}
                >
                  trang cá nhân
                </span>
              </div>
            </div>
          </Link>
        )}

        <Link to="/products">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <StoreIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span style={{ color: "#000" }}>Mua sắm</span>
          </div>
        </Link>

        <Link to="/search">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <SearchIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span style={{ color: "#000" }}>Tìm kiếm sản phẩm</span>
          </div>
        </Link>

        <Link to="/cart">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <LocalMallIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span style={{ color: "#000" }}>Giỏ hàng</span>
          </div>
        </Link>

        <Link to="/favourites">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <FavoriteBorderIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span style={{ color: "#000" }}>Giỏ hàng yêu thích</span>
          </div>
        </Link>

        {isAuthenticated && (
          <>
            <Link to="/orders">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "7px 0",
                }}
              >
                <ListAltIcon
                  style={{
                    fontSize: "30px",
                    color: "#000",
                    marginRight: "10px",
                  }}
                />
                <span style={{ color: "#000" }}>Đơn hàng</span>
              </div>
            </Link>

            <Link to="/password/update">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "7px 0",
                }}
              >
                <VpnKeyIcon
                  style={{
                    fontSize: "30px",
                    color: "#000",
                    marginRight: "10px",
                  }}
                />
                <span style={{ color: "#000" }}>Đổi mật khẩu</span>
              </div>
            </Link>

            <Link to="/password/forgot">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "7px 0",
                }}
              >
                <QuestionMarkIcon
                  style={{
                    fontSize: "30px",
                    color: "#000",
                    marginRight: "10px",
                  }}
                />
                <span style={{ color: "#000" }}>Quên mật khẩu?</span>
              </div>
            </Link>

            <Link to="/me/update">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "7px 0",
                }}
              >
                <Update
                  style={{
                    fontSize: "30px",
                    color: "#000",
                    marginRight: "10px",
                  }}
                />
                <span style={{ color: "#000" }}>Trang cá nhân</span>
              </div>
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "7px 0",
                cursor: "pointer",
              }}
              onClick={logoutUser}
            >
              <ExitToAppIcon
                style={{
                  fontSize: "30px",
                  color: "#000",
                  marginRight: "10px",
                }}
              />
              <span style={{ color: "#000" }}>Đăng xuất</span>
            </div>
          </>
        )}

        <Link to="/contact">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <ContactMailOutlinedIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span style={{ color: "#000" }}>Liên hệ</span>
          </div>
        </Link>

        <Link to="/faq">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <TouchAppOutlinedIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span style={{ color: "#000" }}>Điều khoản người dùng</span>
          </div>
        </Link>

        <Link to="/support">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <Support
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span style={{ color: "#000" }}>Báo cáo</span>
          </div>
        </Link>
      </div>

      {window.innerWidth <= 768 && (
        <div className="bottomTab">
          <BottomTab />
        </div>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default MoreOption;
