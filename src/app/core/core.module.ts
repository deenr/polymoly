import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GeminiService } from './services/gemini.service';
import { SupabaseService } from './services/supabase.service';

@NgModule({
  exports: [],
  imports: [CommonModule],
  providers: [SupabaseService, GeminiService]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
