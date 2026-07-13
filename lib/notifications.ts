"use client";

import Swal from "sweetalert2";

export function showToast(message: string, icon: "success" | "error" = "success") {
  return Swal.fire({
    toast: true,
    position: "top-end",
    icon,
    title: message,
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
  });
}

export async function confirmAction(
  title = "Are you sure?",
  text = "This action cannot be undone.",
) {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#64748b",
    confirmButtonText: "Yes, continue",
    cancelButtonText: "Cancel",
  });

  return result.isConfirmed;
}
