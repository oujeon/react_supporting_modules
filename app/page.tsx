import {
  y_m_d,
  y_m_d_h_m_s,
  y_m_d_h_m_s_i,
  ymd,
  ymdhms,
  ymdhmsi,
  today_y_m_d,
  today_y_m_d_h_m_s,
  today_y_m_d_h_m_s_ms,
  today_ymd,
  today_ymdhms,
  today_ymdhmsms,
  plus,
  minus,
  multiply,
  divide,
  objectToParams,
} from "common_modules";
export default function Home() {
  return (
    <div>
      <table>
        <tr>
          <td style={{ textAlign: "center" }} colSpan={4}>
            <b>날짜</b>
          </td>
        </tr>
        <tr>
          <td>1.</td>
          <td>년-월-일</td>
          <td>:</td>
          <td>{y_m_d("20251231")}</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>년-월-일 시:분:초</td>
          <td>:</td>
          <td>{y_m_d_h_m_s("20251231235959")}</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>년-월-일 시:분:초:밀리초</td>
          <td>:</td>
          <td>{y_m_d_h_m_s_i("20251231235959001")}</td>
        </tr>
        <tr>
          <td>4.</td>
          <td>년월일</td>
          <td>:</td>
          <td>{ymd("2025-12-31")}</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>년월일시분초</td>
          <td>:</td>
          <td>{ymdhms("2025-12-31 23:59:59")}</td>
        </tr>
        <tr>
          <td>6.</td>
          <td>년월일시분초밀리초</td>
          <td>:</td>
          <td>{ymdhmsi("2025-12-31 23:59:59:001")}</td>
        </tr>
        <tr>
          <td>7.</td>
          <td>오늘의 날짜 y-m-d</td>
          <td>:</td>
          <td>{today_y_m_d()}</td>
        </tr>
        <tr>
          <td>8.</td>
          <td>오늘의 날짜 y-m-d h:m:s</td>
          <td>:</td>
          <td>{today_y_m_d_h_m_s()}</td>
        </tr>
        <tr>
          <td>9.</td>
          <td>오늘의 날짜 y-m-d h:m:s:ms</td>
          <td>:</td>
          <td>{today_y_m_d_h_m_s_ms()}</td>
        </tr>

        <tr>
          <td>10.</td>
          <td>오늘의 날짜 y-m-d</td>
          <td>:</td>
          <td>{today_ymd()}</td>
        </tr>
        <tr>
          <td>11.</td>
          <td>오늘의 날짜 y-m-d h:m:s</td>
          <td>:</td>
          <td>{today_ymdhms()}</td>
        </tr>
        <tr>
          <td>12.</td>
          <td>오늘의 날짜 y-m-d h:m:s:ms</td>
          <td>:</td>
          <td>{today_ymdhmsms()}</td>
        </tr>
      </table>
      <table>
        <tr>
          <td style={{ textAlign: "center" }} colSpan={4}>
            <b>계산</b>
          </td>
        </tr>
        <tr>
          <td>1.</td>
          <td>더하기</td>
          <td>:</td>
          <td>{plus(99999999999999999999, 1)}</td>
        </tr>
        <tr>
          <td>1.</td>
          <td>빼기</td>
          <td>:</td>
          <td>{minus(1, 99999999999999999999)}</td>
        </tr>
        <tr>
          <td>1.</td>
          <td>곱하기</td>
          <td>:</td>
          <td>{multiply(1, 99999999999999999999)}</td>
        </tr>
        <tr>
          <td>1.</td>
          <td>나누기</td>
          <td>:</td>
          <td>{divide(99999999999999999999, 1)}</td>
        </tr>
      </table>
      <table>
        <tr>
          <td style={{ textAlign: "center" }} colSpan={4}>
            <b>Axios</b>
          </td>
        </tr>
        <tr>
          <td>1.</td>
          <td>파라미터</td>
          <td>:</td>
          <td>
            {objectToParams({
              name: "홍길도",
              age: "23",
              tel: "010-4107-2433",
            })}
          </td>
        </tr>
      </table>
    </div>
  );
}
