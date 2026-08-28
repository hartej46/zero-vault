/**
 * ZeroVault Public API
 */

export { createVault, unlockVault } from './vault/vault.js';
export {
  VaultError,
  VaultFormatError,
  VaultAuthError,
  VaultCorruptedError
} from './vault/errors.js';
