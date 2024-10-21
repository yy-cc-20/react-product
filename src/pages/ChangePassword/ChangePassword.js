// import React from 'react';
// import ProtectedPageLayout from '../../components/UI/ProtectedPageLayout/ProtectedPageLayout';

// function ChangePassword() { 
//     return (
//         <ProtectedPageLayout>
//             <div class="sign-in-container">
//   <form [formGroup]="changePasswordForm" (ngSubmit)="onSubmit()">
//     <p>Change Password</p>
//     <hr />
//     <div class="form-group">
//       <label>Current Password</label><br />
//       <input type="text" formControlName="currentPassword" placeholder="Please enter current password" class="form-control" />
//       <div *ngIf="changePasswordForm.controls.currentPassword.invalid && changePasswordForm.controls.currentPassword.touched" class="error">
//         Current password is required
//       </div>
//     </div>

//     <div class="form-group">
//       <label>New Password</label><br />
//       <input type="password" formControlName="newPassword" placeholder="Please enter new password" class="form-control" />
//       <div *ngIf="changePasswordForm.controls.newPassword.invalid && changePasswordForm.controls.newPassword.touched" class="error">
//         New password is required
//       </div>
//     </div>

//     <div class="form-group">
//       <label>Confirm New Password</label><br />
//       <input type="password" formControlName="confirmNewPassword" placeholder="Please enter confirm new password" class="form-control" />
//       <div *ngIf="changePasswordForm.controls.confirmNewPassword.invalid && changePasswordForm.controls.confirmNewPassword.touched" class="error">
//         Confirm new password is required
//       </div>
//       <div *ngIf="!passwordIsMatch() && changePasswordForm.controls.confirmNewPassword.touched" class="error">
//         New password is not match
//       </div>
//       <div *ngIf="this.error !== '' && changePasswordForm.controls.newPassword.touched && changePasswordForm.controls.confirmNewPassword.touched" class="error">
//         {{ this.error }}
//       </div>
//     </div>
//     <hr />
//     <div style="display: flex; justify-content: space-between;">
//       <button type="submit" class="btn btn-primary">Submit</button>
//     </div>
//   </form>
//   </div>

//         </ProtectedPageLayout>
//     );
// }

// export default ChangePassword;