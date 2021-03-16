import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'Dịch vụ Chuyển văn bản thành giọng nói hiểu văn bản và ngôn ngữ tự nhiên để tạo ra âm thanh tổng hợp hoàn chỉnh với nhịp điệu và ngữ điệu phù hợp. Nó có sẵn 27 giọng nói (13 giọng thần kinh và 14 giọng chuẩn) trên 7 ngôn ngữ. Chọn giọng nói hiện cung cấp các tính năng Tổng hợp biểu cảm và Chuyển đổi giọng nói được phát triển bởi công ty IT VILASVIETNAM.';
const GDPR_INFO = 'Hệ thống này chỉ dành cho mục đích trình diễn và không nhằm mục đích xử lý Dữ liệu Cá nhân. Không có Dữ liệu Cá nhân nào được đưa vào hệ thống này vì nó có thể không có các biện pháp kiểm soát cần thiết để đáp ứng các yêu cầu của Quy định chung về bảo vệ dữ liệu (EU) 2016/679';
const TERMS_OF_USE_URL = 'https://watson-developer-cloud.github.io/terms?name=Text-to-Speech%20Demo';

function Layout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <title>
          TEXT TO SPEECH PRODUCE BY ITVILASVIETNAM
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Text to Speech Demo" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header
          mainBreadcrumbs="Text to Speech By VilasVietNam"
          mainBreadcrumbsUrl="https://www.ibm.com/watson/services/text-to-speech/"
          subBreadcrumbs="Text to Speech Demo"
          subBreadcrumbsUrl="https://text-to-speech-demo.mybluemix.net"
        />
        <Jumbotron
          serviceName="Text to Speech By ITVilasVietNam"
          repository="https://github.com/watson-developer-cloud/text-to-speech-nodejs"
          documentation="https://cloud.ibm.com/docs/text-to-speech?topic=text-to-speech-gettingStarted"
          apiReference="https://cloud.ibm.com/apidocs/text-to-speech"
          
          version="GA"
          serviceIcon="/images/service-icon.svg"
          description={DESCRIPTION}
        />
        <div className="_container _container_large gdpr-info">
          {GDPR_INFO}
        </div>
        <div className="_container _container_large gdpr-info">
          Đồng ý với điều khoản của chúng tôi 
          <a target="_blank" rel="noreferrer noopener" href={TERMS_OF_USE_URL}>
                Terms of Use
          </a>
        </div>
        <div id="root">
          {children}
        </div>
        <script type="text/javascript" src="js/bundle.js" />
        <script type="text/javascript" src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};

export default Layout;
