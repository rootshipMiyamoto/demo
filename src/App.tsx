import { useMemo } from "react";
import "./App.css";

type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Member" | "Viewer";
  team: "A" | "B" | "C";
  status: "Active" | "Invited" | "Suspended";
  createdAt: string; // ISO
};

const USERS: User[] = [
  {
    id: "u001",
    name: "宮本 真吾",
    email: "miyamoto@example.com",
    role: "Admin",
    team: "A",
    status: "Active",
    createdAt: "2025-11-02T10:00:00Z",
  },
  {
    id: "u002",
    name: "竹田 さくら",
    email: "takeda@example.com",
    role: "Member",
    team: "B",
    status: "Active",
    createdAt: "2025-12-10T10:00:00Z",
  },
  {
    id: "u003",
    name: "國場 たいき",
    email: "kuniba@example.com",
    role: "Member",
    team: "A",
    status: "Invited",
    createdAt: "2026-01-05T10:00:00Z",
  },
  {
    id: "u004",
    name: "網野 りょう",
    email: "amino@example.com",
    role: "Viewer",
    team: "C",
    status: "Suspended",
    createdAt: "2025-10-20T10:00:00Z",
  },
  {
    id: "u005",
    name: "山田 まこと",
    email: "yamada@example.com",
    role: "Member",
    team: "B",
    status: "Active",
    createdAt: "2025-09-13T10:00:00Z",
  },
  {
    id: "u006",
    name: "佐藤 ゆう",
    email: "sato@example.com",
    role: "Viewer",
    team: "A",
    status: "Active",
    createdAt: "2026-02-01T10:00:00Z",
  },
];

export default function App() {
  const count = useMemo(() => USERS.length, []);

  return (
    <div className="page">
      <header className="header">
        <div>
          <h1>User Directory</h1>
          <p className="muted">登録ユーザー: {count} 名</p>
        </div>
      </header>

      <section className="card">
        <table className="table">
          <thead>
            <tr>
              <th>名前</th>
              <th>メール</th>
              <th>ロール</th>
              <th>チーム</th>
              <th>状態</th>
              <th>作成日</th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((u) => (
              <tr key={u.id}>
                <td className="strong">{u.name}</td>
                <td className="mono">{u.email}</td>
                <td>{u.role}</td>
                <td>{u.team}</td>
                <td>{u.status}</td>
                <td className="mono">
                  {new Date(u.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
