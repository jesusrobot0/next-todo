"use client";

import { useState } from "react";
import Link from "next/link";
import { Cog, XCircle } from "lucide-react";
import styles from "./user-actions.module.css";

export function UserActions() {
  const [accountMenuToggle, setAccountMenuToggle] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownSelect}
        onClick={() => setAccountMenuToggle(!accountMenuToggle)}
      >
        <div className={styles.dropdownSelected}>
          <div className={styles.navigationAvatar}>JV</div>
        </div>
        <div
          className={
            accountMenuToggle
              ? `${styles.dropdownCaretRotate}`
              : `${styles.dropdownCaret}`
          }
        ></div>
      </button>
      {accountMenuToggle && (
        <ul className={styles.dropdownMenu}>
          <li
            onClick={() => setAccountMenuToggle(!accountMenuToggle)}
            className={styles.dropdownMenuDangerOption}
          >
            <Link href="#">
              <XCircle className={styles.icon} />
              Cerrar Sesión
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
